const router = require('express').Router()
const CompteController = require('../controllers/Compte');
const multer = require('multer');
const VerifyToken = require('../middlewares/VerifyToken');
const dotenv = require('dotenv');
var upload = multer({dest : 'public/uploads/'});

const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser : true },
  ()=>{
    console.log('connected ....');
  }
);


router.post('/debiter', async (req,res,next) => {
    const debit = await new CompteController().Debit(req.body);
    if (debit === 0) {
        res.status(200).send('credit null');
    } else if (debit === 1) {
        res.status(200).send('erreur backend');
    } else if (debit === 2) {
        res.status(200).send('erreur time');
    } else {
        res.status(200).send(debit);
    }
});

module.exports = router