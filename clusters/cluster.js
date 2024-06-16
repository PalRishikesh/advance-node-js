import cluster  from "cluster";
import express from "express";

const port = 3000;
const app = express();

import OS  from "os";
console.log(OS.cpus().length);

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker ${process.id} started `);

    app.get("/",(req,res)=>{
        res.send("Home page")
    })
    app.get("/slow-page",(req,res)=>{
        let total = 0;
        for (let index = 0; index < 50_000_000_00; index++) {
            total++;
        }
        res.send(`The result of the CPU intensive task is ${total}\n`);
    });
    
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`);
        console.log(`worker pid = ${process.pid}`);
    })
}