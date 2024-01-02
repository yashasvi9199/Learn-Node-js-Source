module.exports.myAge = (req, res, next) => {
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
        if(age <18){
            res.send("Sorry! You are underaged")
        }else if(age >= 18){
            next()
        }
        
    }
}