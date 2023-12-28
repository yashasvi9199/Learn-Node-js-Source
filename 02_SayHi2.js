// require can be used to import the exports
// syntax : require('<file path>')
//here we will be storing this in a variable

const names = require('./02_Data')
//or we can deconstruct the values as : 
// const {john, peter} = require('./-2_Data)

const sayHi = require('./02_Module')
const data = require('./02_Alternative_Data')

// console.log(names)
sayHi(names.name1)
sayHi(names.name2)

console.log(data)