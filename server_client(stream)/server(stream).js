const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const reader = fs.createReadStream(__dirname+"/data.txt");
    reader.pipe(res);
});
server.on("connection",()=>{
    console.log("Someone connected.");
});

server.listen(5588);