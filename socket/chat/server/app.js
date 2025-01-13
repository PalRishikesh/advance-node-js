import express from "express";
import {createServer} from "http";
import { Server } from "socket.io";
import cors from "cors";
import jwt from 'jsonwebtoken';

import cookieParser from "cookie-parser";

const port = 3000;

const secretJWTKey = 'skdfhbekwrfkjfheuwyr3r333';

const app= express();

const server = createServer(app);
const io =  new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
    }
});



app.use(cors());
app.get('/',(req,res)=>{
    return res.send("Hello World!");
})


app.get('/login',(req,res)=>{
    const token = jwt.sign({_id:"asfseererere333"},secretJWTKey);

    res.cookie('token',token,{httpOnly:true,secure:true,sameSite:"none"})
    .json({
        message:"Login Success"
    })
})


io.use((socket,next)=>{
    cookieParser()(socket.request, socket.request.res,(err)=>{
        if(err) return next(err);

        const token = socket.request.cookies.token;
        if(!token) return next(new Error("Authentiction Error"))
        const decode = jwt.verify(token, secretJWTKey);
        next();
    })
})

io.on('connection',(socket)=>{
    console.log('User Connect');
    console.log('Id: ',socket.id);
    let id = socket.id;

    socket.on('message',({message, room})=>{
        // io.emit("receive-message",data)
        // socket.broadcast.emit("receive-message",data)
        io.to(room).emit("receive-message",message);

        
    })
    socket.on('join-room',(room)=>{
        socket.join(room)
    })

    socket.on('disconnect',(s)=>{
        console.log(`User disconnected ${id}`);
        
    })
    // socket.emit('welcome','Welcome the the server chat.');
    // socket.broadcast.emit('welcome',`Welcome the the server chat.${socket.id}`);
})


server.listen(port,()=>{
    console.log(`Server is running at ${port}...`);
    
})