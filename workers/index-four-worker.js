const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;

const THREAD_COUNT = 4;


app.get("/non-blocking/", (req, res) => {
    res.status(200).send(
        "This Page is non-blocking"
    )
});

function createWorker() {
    return new Promise((resolve, reject) => {
        const workerThread = new Worker("./four-worker.js", {
            workerData: { thread_count: THREAD_COUNT }
        })

        workerThread.on("message", (data) => {
            resolve(data);

        });
        workerThread.on("error", (data) => {
            reject(`An error occur ${data}`);
        });
    })
}


app.get("/blocking", async (req, res) => {
    const workerPromise = [];
    for (let index = 0; index < THREAD_COUNT; index++) {
        workerPromise.push(createWorker());
    }

    const threadResults = await Promise.all(workerPromise);
    const totalResponse = threadResults[0] + threadResults[1] + threadResults[2] + threadResults[3];
    res.status(200).send(`result is ${totalResponse}`);

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})