const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/",(req,res)=>{
    res.status(200).send(
        "This Page is non-blocking"
    )
});

app.get("/blocking",async(req,res)=>{
    // let counter = 0;
    // for (let index = 0; index < 20_000_000_00; index++) {
    //     counter++;
    // }

    const workerThread = new Worker("./worker.js");
    workerThread.on("message",(data)=>{
        res.status(200).send(`result is ${data}`);

    });
    workerThread.on("error",(data)=>{
        res.status(400).send(`An error occur ${data}`);

    });
    // res.status(200).send(`result is ${counter}`);

})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})