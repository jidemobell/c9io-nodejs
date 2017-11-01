const url = process.argv[2];
const http = require('http');

         http.get(url,(response)=>{
        let output = '';
        let count = 0;
        response.on('data',function treatData(data){
        //  let firstOut = data.split('');
          output += data;
        })
        response.on('error',console.error)
        response.on('end',()=>{
            console.log(output.split('').length);
            console.log(output);
            http.end;
        })
         }).on('error',console.error)