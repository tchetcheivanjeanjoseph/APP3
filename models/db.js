const mysql = require('mysql')
const util = require('util')

const connection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'admin',
    db:'app'
})

connection.connect((err)=>{
    if (err) throw err;
})

connection.query = util.promisify(connection.query)

module.exports = connection