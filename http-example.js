const http=require("http");
const req=http.request('http://google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log('chunk=>',chunk)
    })
    res.on("end",()=>{
        console.log("no more data");
    })
})
req.end();
