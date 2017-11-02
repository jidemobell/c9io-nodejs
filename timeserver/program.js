const net = require('net');
const date = new Date();


const completeDigit = (digit)=> (digit<10) ? ('0'+digit):digit;

const timeFormat = date.getFullYear()+'-'+completeDigit(date.getMonth()+1)+'-'+completeDigit(date.getDate()) +'\
 '+completeDigit(date.getHours())+':'+completeDigit(date.getMinutes());
 
const server = net.createServer((socket)=>{
                 socket.write(timeFormat,()=>{
                     socket.end('\n');
                 })
                }).on('error',console.error);
                

server.listen(process.argv[2]);