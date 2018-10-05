const fs=require('fs');
const http=require('http');
//with out stream
const img=fs.readFileSync('s.png');
http.createServer(function(req,resp){
resp.end(img);
}).listen(8081,()=>{console.log('start server on port 8081')})

//with streams

http.createServer(function(req,resp){
    resp.setHeader('content-type','image/png');
   fs.createReadStream('s.png').pipe(resp);

}).listen(8080,()=>{console.log('start server on port 8080')})

