let http = require("http");
let urls = [process.argv[2],process.argv[3],process.argv[4]];
let bl = require("bl");
let responses = [];
let count=0;

for (let i = 0; i < urls.length; i++) {
     
     http.get(urls[i],(response)=>{
         response.pipe(bl((error,data)=>{ 
             if(error)console.error
             
             responses[i] = data.toString();
             count++;
            // console.log('count is '+ count);
             if(count === 3){
                // console.log('count is now 3')
                 console.log(responses[0]);
                 console.log(responses[1]);
                 console.log(responses[2]);
             }
         }))
     })
}


    