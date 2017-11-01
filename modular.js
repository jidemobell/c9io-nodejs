


 module.exports = function  (dir,extension,callback){
            let fs = require('fs');
           let path = require('path');  
             fs.readdir(dir,(error,list) => {
     if (error) return callback(error)

     list = list.filter((entry)=>{
        if(path.extname(entry)===('.'+extension)) return true
     })
     return callback(null,list);
     
})

 }
 
 
