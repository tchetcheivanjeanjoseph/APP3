const router = require('express').Router()

router.get('/inscription', (req,res)=>{
    res.send(`C'est l'inscription`)
})

router.post('/inscription', (req,res)=>{
    const value = req.body
})

module.exports = router