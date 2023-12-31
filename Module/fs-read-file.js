const fs = require('fs')
const path = require('path')
const dir = `/home/drone/Development/Learn-Node-js-Source/fs_files`

console.log(dir)

fs.readdir(dir, (err, files) =>{
        console.log(files)
        files.forEach(element => {
            console.log(`File name is : ${element}`)
        })
    
})