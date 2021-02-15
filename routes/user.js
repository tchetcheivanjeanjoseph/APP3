const router = require('express').Router()
const UserController = require('../controllers/Auth');
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

router.get('/register', (req,res,next) => {
    res.render('sign-up', { success : 'e'});
});

router.post('/register', upload.any(), async (req,res,next) => {
    console.log(req.files);
    const user = await new UserController().Register(req.body,req.files);

    if (user === false) {
         //res.status(400).send(res.statusMessage);
         res.render('sign-up', { success: false })
    } else {
        res.render('sign-up', { success: true })
    }
});


router.post('/login', async (req,res,next) => {
    console.log(req.body);
    const user = await new UserController().Login(req.body);

    if (user === 0) {
        res.status(404).send('Users not found');
    } else if (user === 1) {
        res.status(400).send('Password not correct');
    } else {
        res.status(200).send(user);
    }
});

router.get('/find-user/:id', async (req,res,next) => {
    const user = await new UserController().FindUserByID(req.params.id);
    if (user !== 0) {
        res.status(200).send(user);
    }
});

router.post('/test', async (req,res,next) => {
    console.log(req.body);
});

module.exports = router