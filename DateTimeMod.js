const getCurrentTime = ()=>{
    var d = new Date(); // for now
    return d.getHours() + ":"+d.getMinutes()+":"+d.getSeconds();
}
module.exports = {getCurrentTime};
