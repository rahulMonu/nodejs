
var http = require("http");
var url = require("url");
var uppercase = require("upper-case")
var file = require("fs");
var event = require("events");
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rahul.monu0407@gmail.com',
        pass: 'rahul04%#'
    }
});
function serverCode(req, res)
{
    console.log("Got request from url :",req.url);
    var queryStr = url.parse(req.url,true);
    console.log("Url : ",queryStr.pathname)
    if(queryStr.pathname == "/")
    {
        //console.log("Month : ",queryStr.month,"\n Year : "+ queryStr.year);
        //var msg = "<h3>"+uppercase.upperCase(Date())+"</h3><br> Hello World test ";
        file.readFile("getContact.html",function (error,data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(queryStr.pathname == "/submitform")
    {
        var qdata = queryStr.query;
        console.log("FirstName : ",qdata.firstname);
        console.log("LastName : ",qdata.lastname);
        console.log("Country : ",qdata.country);
        /*var mailContent = {
            from: 'rahul.monu0407@gmail.com',
            to: 'rahulkushwaha04@gmail.com',
            subject: 'Sending Email using Node.js',
            text: '<h1>Welcome</h1><br><p> First Name : '+qdata.firstname+'</p><br><p> Last Name : '+qdata.lastname+'</p><br><p> Country : '+qdata.country+'</p>'
          };

        transporter.sendMail(mailContent, function(error, info){
            if (error) {
                console.log("Email Not sent : ",error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });*/
    }
    else
    {
        res.writeHead(404,{'Content-Type': 'text/html'});
        return res.end();
    }
}

