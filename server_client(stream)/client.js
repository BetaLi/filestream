const http = require('http');

const start = new Date();
http.get("http://localhost:5566",(res)=>{
    console.log(res);
    const end = new Date();
    console.log(`${end-start}`);
    let count = 0;
    res.on("data",(data)=>{
        count++;
        console.log("Recv the data."+`${count}`);
        //console.log(data.toString());
    });
    res.on("end",()=>{
        console.log("DONE.")
    })
});

