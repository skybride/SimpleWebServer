//require http library which is used to start the server
const http = require("http");

//what port to use
const port = 3000;

//libary that handles files (such as HTML)
const fs = require("fs");

//create server using http variable
//createServer takes 2 parameters request and response
const server = http.createServer((req, res) => {

    //response header info
    res.writeHead(200, { "Content-Type": "text/html" })

    fs.readFile("index.html", (error, data) => {
        if(error) {
            res.writeHead(404)
            res.write("Error: File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
});

//setup server to listen on port
server.listen(port, (error) => {
    if(error){
        console.log("Error, " + error);
    } else {
        console.log("Server is listening on port " + port);
    }
});


