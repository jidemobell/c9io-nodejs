var http = require("http");
var url = process.argv[2];

    http.get(url,(response)=>{
        let output = '';
        
        response.on('data',function treatData(data){
          console.log(data.toString());
        });

        response.on('end',()=>{
            http.end;
        })
        
        
    })
