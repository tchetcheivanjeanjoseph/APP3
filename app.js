const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

const accueil = require('./routes/accueil')

app.use(accueil)

app.listen(3000, ()=>{
    console.log('Connecté');
})