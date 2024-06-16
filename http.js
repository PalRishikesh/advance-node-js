const http = require('http');
const PORT = 5000;
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","application/json");
    res.writeHead(200);
    res.end(`{"message":"This is response"}`)
})
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

// const server = http.createServer((req,res)=>{
//    const bodyStream = [];
//    req.on('data',(chunk)=>{
//     bodyStream.push(chunk);
//    })
//    req.on('end',()=>{
//     const bufferData = Buffer.concat(bodyStream);
//     const requestBody = JSON.parse(bufferData);
//     console.log("Request Body ",requestBody);
//     res.end("All Good!");
//    })
// })




server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})