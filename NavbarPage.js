const {readFileSync} = require("fs")
const http = require("http")

const indexPage = readFileSync("./SampleNavbar/index.html","utf-8")
const stylecss = readFileSync("./SampleNavbar/styles.css","utf-8")
const logo = readFileSync("./SampleNavbar/logo.svg")
const browserJs = readFileSync("./SampleNavbar/browser-app.js")

const httpPage = http.createServer((req, res)=>{
    console.log("URL received : ",req.url);
    switch(req.url)
    {
        case '/':
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write(indexPage)
            res.end()
        }
        break;
        case  '/styles.css':
        {
            res.writeHead(200,{"content-type":"text/css"})
            res.write(stylecss)
            res.end()
        }
        break;
        case '/browser-app.js':
        {
            res.writeHead(200,{"content-type":"text/javascript"})
            res.write(browserJs)
            res.end()
        }
        break;
        case '/logo.svg':
        {
            res.writeHead(200,{"content-type":"image/svg+xml"})
            res.write(logo)
            res.end()
        }
        break
        case "/about.html":
        {
            res.writeHead(200,{"content-type":"text/html"})
            res.write("<h1>Learn about us</h1>")
            res.end()
        }
        break;
        default:
        {
            res.writeHead(404,{"content-type":"text/html"})
            res.write("<h1>Page Not found</h1>")
            res.end()
        }
        break;
    }
}
).listen(5000,()=>
{
    console.log(`Server start listening on port 5000`)
})