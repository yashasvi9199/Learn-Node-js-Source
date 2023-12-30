const fs = require('fs')
const dir = __dirname

fs.readFile(`${dir}/Apple`,'utf-8',(err, data)=> {      // remember, adding encoding is necessary else output will be in buffer array
    if(err){
        console.log(`Error : ${err}`)
    }else{
        console.log(data)
    }
})