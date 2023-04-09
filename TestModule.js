const fun = require('./DateTimeMod')

//console.log(module)
setInterval(()=>{
    console.log("Time tick on : ",fun.getCurrentTime());
},1000)


