let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let core = require('cors');
var path = require('path');

let accueil = require('./routes/accueil')
let user = require('./routes/user');
let request = require('./routes/request');
let credit = require('./routes/credit');
let compte = require('./routes/compte');
let meal = require('./routes/meal');
let medical = require('./routes/medical');
let explication = require('./routes/explication');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(core());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

app.use('/', accueil);
app.use('/auth', user);
app.use('/request', request);
app.use('/credit', credit);
app.use('/compte', compte);
app.use('/meal',meal);
app.use('/medical',medical);
app.use('/explication', explication);

app.listen(3000, ()=>{
    console.log('Server started ...');
});