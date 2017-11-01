let modular = require('./modular');
let dir = process.argv[2];
let extension = process.argv[3];


modular(dir,extension,(error,list)=>{ 
    if(error)console.error(error)
    list.forEach(function(entry){
        console.log(entry);
    })
});