const fs = require('fs');

const csvJson = require("csvtojson");
const { Transform } = require('stream');
const { pipeline } = require('stream/promises');
const { createGzip } = require('zlib');

const bufferingObjectStream = require("buffering-object-stream")

const userModel = require("./user");
const mongoUser = process.env.MONGODB_USER;
const mongoPassword = process.env.MONGODB_PASSWORD;
const { default: mongoose } = require('mongoose');


const main = async () => {
console.log("mongoUserL:",mongoUser);
    await mongoose.connect(`mongodb+srv://streamuser:streamuser@cluster0.jy6ku30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    const readStream = fs.createReadStream("./data/import.csv");
    // Writeable
    const writeStream = fs.createWriteStream("./data/export.csv");

    const myTransform = new Transform({
        objectMode: true,
        transform(chunk, encode, callback) {
            const user = {
                name: chunk.name,
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
        transform(user, encoding, callback) {
            if (!user.isActive || user.salary < 500) {
                callback(null)
                return;
            }

            console.log("user: ", user);
            // No need to send any data in callback as it write the data not return the data as last option in pipeline 
            // callback(null)
            callback(null,user)
        }
    })
    
    const convertToNodeJSON = new Transform({
        objectMode:true,
        transform(user,enc, cb){
            const value = JSON.stringify(user)+"\n";
            cb(null)
        }
    })

    // const saveUser = new Transform({
    //     objectMode:true,
    //     async transform(user, enc, cb){
    //         await userModel.create(user)
    //         cb(null,)
    //     }
    // })

    // Saving all user at once
    const saveUser = new Transform({
        objectMode:true,
        async transform(users, enc, cb){
            // const promises = users.map(user => userModel.create(user));
            // await Promise.all(promises)

            /**Bulck  */
            await userModel.bulkWrite(
                users.map(user=>({
                    insertOne:{
                        document:user
                    }
                }))
            )

            cb(null,)
        }
    })

    try {
        await pipeline(
            readStream,
            csvJson({
                delimiter: ";"
            },
                {
                    objectMode: true
                }),
            myTransform,
            filterOption,
            // convertToNodeJSON,
            // // fs.createWriteStream("./data/export.ndjson"), // For storing json format
            // createGzip(),
            // fs.createWriteStream("./data/export.ndjson.gz") // Storing in giz file
            // saveUser,
            bufferingObjectStream(10),
            saveUser
        )

        console.log("streaming ended");
    } catch (error) {
        console.log("If any error");
    }
}
main();