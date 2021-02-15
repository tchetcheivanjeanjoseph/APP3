const router = require('express').Router()
const MedicalController = require('../controllers/Medical');
const multer = require('multer');

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


router.post('/search', async (req,res,next) => {
  const user = await new MedicalController().search(req.body.matricule);
  res.status(200).send(user);
});


router.post('/set-consultation', async (req,res,next) => {
  const med = await new MedicalController().setMedical(req.body);
  if (med === false) {
    res.status(400).send(res.statusMessage);
  } else {
    res.status(200).send(med);
  }
});


router.get('/get-consultation', async (req,res,next) => {
  const consultation = await new MedicalController().getMedical();
  res.status(200).send(consultation);
});


module.exports = router