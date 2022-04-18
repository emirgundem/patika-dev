const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
   
    const url = req.url;
    console.log(url);

    if(url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Home Page</h1>")
    }

    else if(url==='/about'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>About Page</h1>")
    }

    else if(url==='/contact'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Contact Page</h1>")
    }
    
    else {
       
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>Contact Page</h1>")
    }


    res.end();
})



server.listen(port,() =>{
    console.log(`Server running on port :  ${port}`);
});


