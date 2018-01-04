const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const file = path.join(__dirname,"exp-01.txt");
const writer = fs.createWriteStream(file,(err)=>{if(err) throw err;});

const now = new Date();

for (let i = 1000000;i>0;i--){
    writer.write(`${i} Hello\n`,(err)=>{if(err) throw err;});
}

const reader = fs.createReadStream(file,(err)=>{if(err) throw err;});
const zip = zlib.createGzip();
const writer2 = fs.createWriteStream(path.join(__dirname,"exp-01.txt.gz"));
reader.pipe(zip).pipe(writer2);

const end = new Date();
writer.end("This is the file end.");
writer.on("finish",(err)=>{if(err) throw err;console.log("Write is DONE. Cost "+`${end-now}ms.`)});