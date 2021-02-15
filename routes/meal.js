const router = require('express').Router()
const MealController = require('../controllers/Meal');
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

router.get('/get-all', async (req,res,next) => {
    const meal = await new MealController().getAllMeal();
    res.status(200).send(meal);
});

router.get('/get-morning', async (req,res,next) => {
    const meal = await new MealController().getMealMorning();
    res.status(200).send(meal);
});

router.get('/get-night', async (req,res,next) => {
    const meal = await new MealController().getMealNight();
    res.status(200).send(meal);
});


module.exports = router