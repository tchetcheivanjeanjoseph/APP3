const router = require('express').Router()
const UserController = require('../controllers/Auth');
// put multer and upload

router.post('/register', async (req,res,next) => {
    const user = await new UserController().Register(req.body,req.files);

    if (user === false) {
        res.status(400).send(res.statusMessage);
    } else {
        res.status(200).send(user);
    }
});


router.post('/login', async (req,res,next) => {
    const user = await new UserController().Login(req.body);

    if (user === 0) {
        res.status(404).send('Users not found');
    } else if (user === 1) {
        res.status(400).send('Password not correct');
    } else {
        res.status(200).send(user);
    }
});

module.exports = router