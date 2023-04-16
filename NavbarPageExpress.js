const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"Varanasi")))
//app.use(express.static(path.join(__dirname,"SampleNavbar")))

//app.get("/",(req, res) => {
    //res.status(200).send("<h1> Home page </h1>")
    //res.end("<h1>Test page</h1>")
    //res.sendFile(path.join(__dirname, "./SampleNavbar/index.html"))
    //console.log("URL : ",req.url)
//    res.sendFile(path.join(__dirname, "./Public/VaranasiHomePage.html"))
    
//})

app.get("/about", (req, res) =>{
    res.status(200).send("<h3>About page</h3")
})

app.all("*", (req, res) =>{
    res.status(404).send("<h3>Page not found<h3")
})

app.listen(5000,()=>{
    console.log("Server is listening on 5000 port");
    
})


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
