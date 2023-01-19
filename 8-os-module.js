const os = require('os')

// info about CURRENT USER
const user = os.userInfo()
console.log(user)

// method returns the SYSTEM UPTIME (in seconds)
console.log(`The System Uptime is: ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}
console.log(currentOS)