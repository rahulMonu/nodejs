const http = require("http");
const {readFile} = require("fs");


const readHtml = (path, encoding)=>{
 return new Promise((resolve, reject)=>{
     readFile(path, encoding, (error, data)=>{
        if(error)
        {
            reject(error);
        }
        else
        {
            resolve(data);
        }
     });
 });   
}


var server = http.createServer((req, res)=>{
    console.log("Request received");
    if(req.url === "/")
    {
        var data = "in progress";
        // readHtml("./getContact.html","utf8")
        // .then((result)=>res.end(result))
        // .catch((error)=>res.end(error))

        
        start(req,res);
        
    }
    
});

const start = async(req, res)=>{
    try{
        const first = await readHtml("./getContact.html","utf8");
        res.end(first);
    }
    catch(error)
    {
        res.end("Internal Error")
    }            
}

server.listen(8080,()=>{
    console.log("Server start listening on port 8080");
})
