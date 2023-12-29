const os = require('os')
// importing a node js predefined module : OS
// try typing os. and see the list of operations available

//Print user info : using variable
const users = os.userInfo()
console.log(users)

//Print system uptime in seconds : without variable
console.log("System Uptime (seconds): ", os.uptime())

// Print details of current OS in object
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);