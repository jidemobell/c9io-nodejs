let fs = require('fs')
let filename = process.argv[2];

fs.readFile(filename,'utf8', function callback(error, data) {
  if (error) return console.error(error)
  // do something with the movieData
  console.log(data.split('\n').length-1)
})




