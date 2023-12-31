const fs = require('fs')
const dirPath = `/home/drone/Development/Learn-Node-js-Source/fs_files`
const dataObject = {
    orange: 'This is an orange',
    apple: 'This is an apple',
    grape: 'This is a grape'
}

const dataArray = ['orange','apple','grape']

for(let x in dataObject){
    fs.writeFileSync(`${dirPath}/${x}.txt`,dataObject[x])
}

dataArray.forEach((name) => {
    fs.appendFileSync(`${dirPath}/Fruits.txt`,`${name} \n`)
})