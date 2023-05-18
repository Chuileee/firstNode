/* const fs = require('fs');
fs.writeFileSync("message.txt","Lee"); */

const http = require('http');

/* function requestHandler(req,res){
    console.log(req);
}
const server = http.createServer(requestHandler); */

/* const server = http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    process.exit(); //use to stop server
}); */

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    const url =req.url;
    if(url ==='/google'){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>My First Node app</title></head>");
        res.write("<body><h1>go to google web</h1></body>");
        res.write("</html>");
        res.end();


    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>My First Node app</title></head>");
    res.write("<body><h1>Good night</h1></body>");
    res.write("</html>");
    res.end();
});


server.listen(3000);

//crtl+c to stop the server
//process exit();