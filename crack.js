const crypto = require('crypto')
const fs = require('fs')

console.log("Initializing...")
const buffer = crypto.randomBytes(256).toString('base64')
fs.writeFileSync('connect32.bin', crypto.randomBytes(1000000).toString('binary'), 'utf-8')
console.log("Starting Brute Force Attack")

for (let i=0; i < 100; i++){
    console.log(buffer)
}

fs.writeFileSync('futureclient.jar', crypto.randomBytes(15000000).toString('binary'), 'binary')
console.log("Success!")

