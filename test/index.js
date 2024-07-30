const express = require('express');

const app = new express();

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("jh")
})

app.post('/v1/api',(req, res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})



