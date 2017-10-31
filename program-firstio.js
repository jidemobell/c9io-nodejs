const fs = require('fs');
const filename = process.argv[2];
let reader = fs.readFileSync(filename);
reader = reader.toString();
console.log(reader.split('\n').length-1);