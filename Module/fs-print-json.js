const fs = require('fs')
const allProcessInfo = process      // process is a default object of JS that holds a lot of info

console.log(typeof(allProcessInfo))
fs.writeFileSync('./fs_files/processDetails.json', JSON.stringify(allProcessInfo), 'utf8', 
function(err){     //in case an error appears
    console.log(`an error appeared : \n ${err}`)
})
