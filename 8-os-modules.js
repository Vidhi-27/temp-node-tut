const os = require('os')//loookin for built in module
//info about current user

const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds


console.log(`The System uptime is ${os.uptime()} seconds .`);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)