const os = require("os");

//console.log(`os name : ${os.version}`)
const platInfo = {
    uname : os.hostname(),
    uptime : os.uptime()
}
//console.log(platInfo.uname)
module.exports = {platInfo}