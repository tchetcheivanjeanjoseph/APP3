const router = require('express').Router()

router.get('/', (req, res)=>{
    res.send('On dit quoi')
});

router.get('/scanner', (req,res,next) => {
    res.render('scanner');
});

module.exports = router