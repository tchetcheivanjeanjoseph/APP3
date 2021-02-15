const router = require('express').Router()
const CreditController = require('../controllers/Credit');
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


router.post('/set-credit', VerifyToken, async (req,res,next) => {
    const credit = await new CreditController().setCredit(req.body);
    if (credit === false) {
        res.status(400).send(res.statusMessage);
    } else {
        res.status(200).send(credit);
    }
});

router.get('/get-credit/:id', async (req,res,next) => {
    const credit = await new CreditController().getCredit(req.params.id);
    if (credit === 0) {
        res.status(404).send('Nothing credit');
    } else {
        res.status(200).send(credit);
    }
});


router.get('/get-credit-admin', async (req,res,next) => {
    const credit = await new CreditController().getCreditAdmin();
    if (credit === 0) {
        res.status(404).send('Nothing credit');
    } else {
        res.status(200).send(credit);
    }
});

router.get('/get-compte/:id', VerifyToken, async (req,res,next) => {
    const compte = await new CreditController().getCompte(req.params.id);
    res.status(200).send(compte);
});



module.exports = router