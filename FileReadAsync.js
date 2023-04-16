const {readFile} = require("fs");

console.log("file start reading");
console.log("Start Time : ",new Date().getMilliseconds());
readFile("getContact.html","utf8",(error, result)=>{
    if(error)
    {
        console.log(error)
        return;
    }
    console.log("End Time : ",new Date().getMilliseconds());
    console.log("File content : ")
    console.log(result);
});
console.log("Another task");