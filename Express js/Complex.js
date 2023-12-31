const express = require('express')
const fs = require('fs')
const http = require('http')

const app = express()
const webPath = `${__dirname}/Static Web Pages`

// let pageArr = []

// let myPromise = new Promise((resolve, rejects)=>{
//     fs.readdir(webPath, (err, files) => {
//         for(let i=0; i<files.length;i++){
//             pageArr[i] = `/${files[i]}`
//         }
//         console.log(pageArr)
//         resolve(pageArr)
//     })
// }).then(
//     (data) => {
//         http.createServer((req,res)=> {
            
//         }).listen(4001)
//     }
// )




app.get("",(req, res)=>{
    res.sendFile(`${webPath}/index.html`)
})
app.get("/contact",(req, res)=> {
    res.sendFile(`${webPath}/contact.html`)
})
app.get("/about",(req, res)=> {
    res.sendFile(`${webPath}/about.html`)
})
app.get("/404",(req,res)=>{
    res.sendFile(`${webPath}/404.html`)
})
app.get("*",(req, res)=>{
    res.redirect("/404")
})

app.listen(4000)