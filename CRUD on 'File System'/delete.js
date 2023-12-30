const fs = require('fs')
const dir = __dirname

fs.unlink(`${dir}/Apple`,(err)=>{       //unlinkSync does not allow us to throw an exception in case of an error
   if(err) console.log(`Error : ${err}`) 
})