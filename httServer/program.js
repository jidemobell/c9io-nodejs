const http = require("http");
const fs = require('fs');
const filePath = process.argv[3];


   http.createServer((req,res)=>{
       res.writeHead(200, { 'content-type': 'text/plain' })
       let readStream = fs.createReadStream(filePath);
       readStream.pipe(res);
   }).listen(process.argv[2]);
