const { parentPort } = require("worker_threads");
let counter = 0;
for (let index = 0; index < 20_000_000_00; index++) {
    counter++;
}

parentPort.postMessage(counter);