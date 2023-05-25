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
    const method = req.method;
    if(url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>My First Node app</title></head>");

        res.write('<body><form action="/message" method="post"><input type="test" name = "message"/><button type="submit">submit</form></body>');
        res.write("</html>");
        res.end();


    }

    if(url ==='/message' && method === 'POST'){
        //write code to receive data and parse that data
        const body =[];
        req.on('data',(chunk)=> {
            console.log(chunk);
            body.push(chunk);
        });

        //parse the data
        req.on('end',()=>{
            const.parseBody = Buffer.concat(body).toString();
            console.log(parseBody); //parseBody = key/value
            const message = parseBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt',message);
        });



        fs.writeFileSync('message.txt','Lee')
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();
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