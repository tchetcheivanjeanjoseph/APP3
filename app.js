const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

const accueil = require('./routes/accueil')
const user = require('./routes/user');

app.use('/auth',user);

app.listen(3000, ()=>{
    console.log('Connecté');
})