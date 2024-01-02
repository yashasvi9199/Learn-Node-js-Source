const express = require('express')
const app = express()
const {myAge} = require('./age-middleware') // ensure that it is deconstructed else we will get an error for receiving an object instead    
app.listen(5000)

//Creating a function for using middleware
const myWare = (req, res, next) => {
    /*
        3 parameters are used
        req, res remain same as other usage
        next is a function used to route to other routing methods.
        If next() is not added, the page will continue loading forever
    */

    let age = req.query.age
    if(!age){
        res.send("Please Provide an age")
    }
    else{
        next()
    }
}

// Approach 1
//This is convectional usage and aplies on all the routes in this js code. {check comment at bottom of this block/approach}

app.get("/",(req,res)=>{
    res.send("HELLO USER")
})

app.use(myWare)     // This allows Middleware to be applied to all the routes


//Approach 2
//Adding Middleware function to route
// With this, it will only be applied to one single route and other routes will continue to work normal without Age condition
app.get('/2',myWare,(req, res,)=>{
    res.send("Welcome to second approach")
})

// Approach 3
// Using Middlewares from another js files
app.get('/3',myAge,(req, res) => {
    res.send("Welcome to third approach")
})

// Approach 4
// Applying Middlewares only on selected routes but in bulk
const route = express.Router()      //  importing route
route.use(myAge)                    // declaring Middleware to route function

//we will create two different routes for ease of understanding purpose
app.get('/4',(req, res) => {        // w/o Middleware
    res.send("Welcome to fourth Approach")
})
route.get('/5',(req, res) => {      // with Middleware
    res.send("Welcome to fifth Approach")
})

app.use('/', route)                 // using this to deplace the express() (app) that we are going to use this Router from beginning
// However, notice that it will only be applied on those routes where we have replaced 'app' with 'route'