const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   fs.readFile(__dirname+"/data.txt",(err,data)=>{
       if(err) throw err;
       res.end(data);
   });
});
server.on("connection",()=>{
    console.log("Someone connected.");
});

server.listen(5566);