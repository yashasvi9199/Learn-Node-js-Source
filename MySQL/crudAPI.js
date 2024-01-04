const con = require('./mysqlConfig')
const express = require('express')
const app = express()
app.listen(5001)
app.use(express.json())

app.get('/',(req, res) => {
    con.query("select * from users",(err,result)=> {
        console.log("RESULT =",result)
        res.send(result)
    })
})

app.post('/',(req,res)=>{
    let data = req.body;
    con.query("INSERT INTO users SET ?",data, (err,result) => {
        if(err) console.log("ERROR =>", err)
        res.send(result)
    })
})

app.put('/:key',(req, res)=> {
    let data = [req.body.name, req.body.email, req.body.password, req.params.key]
    con.query("UPDATE users SET name=?, email=?, password=? where idusers=?",data,(err,result)=>{
        if(err) console.log("ERROR =>", err)
        res.send(result)
    })
})

app.delete('/:key',(req,res)=>{
    let data = req.params.key
    con.query("DELETE FROM users WHERE idusers=?", data, (err, result)=> {
        if(err) console.log("ERROR =>", err)
        res.send(result)
    })
})
