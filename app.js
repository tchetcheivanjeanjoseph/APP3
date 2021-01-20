const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

const accueil = require('./routes/accueil')
const inscription = require('./routes/inscription');

app.use('/auth',inscription);

app.listen(3000, ()=>{
    console.log('Connecté');
})