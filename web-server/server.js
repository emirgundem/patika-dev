const http = require('http');
const port = 5000;

const server = http.createServer((req,res)=>{
     
     const url = req.url

     if(url === '/index'){
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write('<h2>Index Sayfasına Hoşgeldiniz</h2>');
     }

     else if(url==='/hakkımda'){
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write('<h2>Hakkımda Sayfası</h2>');
     }

     else if(url==='/iletisim'){
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write('<h2>İletisim Page<h2/>');
     }

     else {
         res.writeHead(404, { "Content-Type": "text/html" });
         res.write('Sayfa Bulunamadı');
     }
     res.end();
})


server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

