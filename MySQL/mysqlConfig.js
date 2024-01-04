const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Nodejs'
})
con.connect((err)=>{
    err ? console.log("ERROR => ",err) : console.log()
})

module.exports = con