let a = 10
let b = 0

let waitPromise = new Promise( (resolve,reject) => {
    /*Resolve is used in a situation where we want to apply the changes
    Reject is used in a situation where we have an error and wish to handle it*/
    setTimeout(()=>{
        resolve(30)
    },5000)    
}).then( (data) => {
    b= data
    console.log(a+b)
})

/*Alternatively it can be done this way
waitPromise.then()...

// In a need for handling the errors : 
waitPromise.then((data)=>console.log(a+data)).catch(err=>console.error("Error: "+ err))
*/