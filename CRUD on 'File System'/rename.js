const fs = require('fs')
const dir = __dirname

fs.rename(`${dir}/Apple`, `${dir}/Fruits`, (err)=>{
    if(err) console.log(`ERROR: ${err}`)
})