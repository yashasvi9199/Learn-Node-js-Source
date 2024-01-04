const EventEmitter = require('events')  //the reason its CamelCase is cuz it is a classname
const event = new EventEmitter()        // creating instance of a class
const express = require('express')
const app = express()

let count=0
event.on('counter', ()=> {  // creating function for event. event.on('<name of event function>', callback function{})
    count++
})

app.get('/',(req, res) => {
    event.emit('counter')   // calling function of event we created
    res.send(`Hello User \n You requested API for ${count} times`)
}).listen(5001)