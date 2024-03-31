const fs = require("fs")

/* Reable Streams */

const readable = fs.createReadStream("./text-file.txt",{highWaterMark:40})

// let chunkCount = 0;

// readable.on("data",(chunk)=>{
//     if(chunkCount == 2){
//         readable.pause();
//     }
//     setTimeout(() => {
//         readable.resume();
//     }, 3000);

//     console.log("New Chunk data: ",chunk.toString());
//     chunkCount++;
// })

// (async()=>{
//     for await(const chunk of readable){
//         console.log("New Chunk async: ",chunk.toString());
//     }
// })()

/** Writable Stream */

// const writable = fs.createWriteStream("new-text-file.txt");
// writable.write("Hello, ");
// writable.end("World");

/** Duplex stream */

const { Transform,pipeline } = require("stream");
const readableDuplex = fs.createReadStream("./text-file.txt1",{highWaterMark:20});
const writeableDuplex = fs.createWriteStream("new-text-file.txt");

const upperCase = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase())
    }
})

// This is hard to handle the error, so we can use pipline
// readableDuplex.pipe(upperCase).pipe(writeableDuplex);
pipeline(readableDuplex, upperCase, writeableDuplex,(error)=>{
    if(error){
        console.error(error);
    }
})