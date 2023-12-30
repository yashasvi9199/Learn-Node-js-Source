const fs = require('fs')
const input = process.argv

// assuming that first parameter is file name [2]
// second parameter is data for the file [3]
// third parameter is add/delete [4]


let filename = `../fs_files/${input[2]}`
let data = `${input[3]} \n`     //everytime user appends it, the message will be updated in new line with this
let op = input[4]

if(op === 'add'){
    if(fs.existsSync(filename)){
        fs.appendFileSync(filename,data,'utf-8',function(err){
            console.log(`Oops! An error occured : \n ${err}`)
        })
        console.log('File Existing. Appended Successfully')
    }else{
        fs.writeFileSync(filename,data,'utf-8',function(err){
            console.log(`Oops! An error occured : \n ${err}`)
        })
        console.log('Added Successfully')
    }
}else if(data === 'del' && op === undefined){
    fs.unlinkSync(filename,function(err){
        console.log(`Oops! An error occured : \n ${err}`)
    })
    console.log('Deleted Successfully')
}else {
    console.log('Please enter operation on file as <file name with extension> <text> <add/del>')
}