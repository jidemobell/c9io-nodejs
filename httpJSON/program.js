const http = require("http");
const url = require("url");



   http.createServer((req,res)=>{
      let pathName = url.parse(req.url, true).pathname;
      let Query = url.parse(req.url,true).query;
      let time = new Date(Query.iso);
      
      if(pathName === '/api/parsetime'){
          res.writeHead(200,{'Content-type': 'application/json'});
          res.write(JSON.stringify({
              'hour':time.getHours(),
              'minute':time.getMinutes(),
              'second':time.getSeconds()
          }))
          res.end();
      }
      else if (pathName === '/api/unixtime'){
          res.writeHead(200,{'Content-type': 'application/json'});
          res.write(JSON.stringify({
              'unixtime':time.getTime(),

          }))
          res.end();
      }
      else{
          res.writeHead(404,{'Content-type': 'text/plain'});
      }
     
     
   }).listen(process.argv[2]);