const router = require('express').Router()
const ExplicationController = require('../controllers/Explication');
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

router.post('/send', async (req,res,next) => {
    const explication = await new ExplicationController().send(req.body);
    if (explication === false) {
        res.status(400).send(res.statusMessage);
    } else {
        res.status(200).send(explication);
    }
});

router.get('/receive/:id', async (req,res,next) => {
    const explication = await new ExplicationController().receive(req.params.id);
    res.status(200).send(explication);
})

module.exports = router