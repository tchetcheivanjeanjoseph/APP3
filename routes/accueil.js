const router = require('express').Router()

router.get('/', (req, res)=>{
    res.send('On dit quoi')
})

module.exports = router