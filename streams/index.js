const fs = require('fs');

const csvJson = require("csvtojson");
const { Transform } = require('stream');


const main = async()=>{
    // User to call at the time of callback
    // return new Proimise((resolve,reject)=>{
    // })

    console.log("calling main function.................");
    // const readStream = fs.createReadStream("./data/import.csv",{
    //     highWaterMark:100
    // });
    const readStream = fs.createReadStream("./data/import.csv");
    // Writeable
    const writeStream = fs.createWriteStream("./data/export.csv");

    // readStream.on('data',(buffer)=>{
    //     console.log(">>>>>>>>>>> Data >>>>>>>>>>>>");
    //     console.log(buffer);
    //     writeStream.write(buffer);

    // })
    // readStream.on('end',(error)=>{
        
    //     console.log("Stream here here");
    //     writeStream.end();
    // })

    // readStream.on('error',(error)=>{
    //     console.log("There is errror ",error.message);
    // })

    /** To overcome problem of memory leak due to different speed transfer from a to b we can use pipe */

    // readStream.pipe(writeStream);
    // readStream.on('end',()=>{
    //     console.log("Stream ended..");
    // })
    // writeStream.on('finish',()=>{
    //     console.log("Write Stream ended..");
    // })

    /** CSV to JSON */
    // If ther is error in transform

    // readStream.pipe(csvJson({
    //     delimiter:';'
    // },{objectMode:true})
    // ).on('data',data=>{
    //     console.log("data >>>>");
    //     console.log(data);
    // });
    
    const myTransform = new Transform({
        objectMode:true,
        transform(chunk, encode, callback){
            const user = {
                name:chunk.name,
                email: chunk.email.toLowerCase(),
                age: Number(chunk.age),
                salary: Number(chunk.salary),
                isActive: chunk.isActive === 'true',
                newColumn: 'testing'
            }
            callback(null, user)
        },
    });

    const filterOption = new Transform({
        objectMode: true,
        transform(user,encoding, callback){
            if(!user.isActive || user.salary < 500){
                callback(null)
                return;
            }
            callback(null, user)
        }
    })

    readStream.pipe(csvJson({
        delimiter:';'
    },{objectMode:true})
    ).pipe(
        // Upper function
        myTransform
    )
    .pipe(
        filterOption
    )
    .on('data',(data)=>{
        console.log("Data >> ",data);
    })
    .on('error',error=>{
        console.log("Stream error : ",error);
    }).on('end',()=>{
        console.log("Stream Ended");
        // cb()
    });
    
    // For error handling we have to use callback function in every event


}
 main();