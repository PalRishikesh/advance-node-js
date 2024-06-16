const fs = require("fs");


// Reading File
// let data = "";

// const readerStream = fs.createReadStream("interview-question/text-file.txt");
// readerStream.setEncoding("UTF8");

// readerStream.on("data",function(chunk){
//     data += chunk;
// })

// readerStream.on("end",function(){
//     console.log("Data read completed")
//     console.log(data);
// })

// readerStream.on("error",function(error){
//     console.log("There is error: ",error);
// })

// Writing files

// let data = "This is code to write in stream file";

// let writeStream = fs.createWriteStream("interview-question/output.txt");

// writeStream.write(data,"UTF8");

// writeStream.end();

// writeStream.on('finish',function(){
//     console.log("Data write completed");
// })

// Piping


const readerStream = fs.createReadStream("interview-question/text-file.txt");

const writeStream = fs.createWriteStream("interview-question/output_3.txt.gz");


// readerStream.pipe(writeStream)

// Chaining the stream

const zlib = require("zlib");

readerStream.pipe(zlib.createGzip()).pipe(writeStream)
