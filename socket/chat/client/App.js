
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {Button, Container, TextField, Typography } from "@mui/material"
import { useMemo } from 'react';

function App() {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [socketID, setSocketID] = useState('');
  const [roomName, setRoomName] = useState('');

  const socket = useMemo(()=>io('http://localhost:3000',{
    withCredentials:true
  }),[]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    socket.emit('message',{message, room});
    setMessage('')
  }

  const joinRoomHandler=(e)=>{
    e.preventDefault();
    socket.emit('join-room',roomName)
    setRoomName('')
  }
  useEffect(()=>{
    socket.on('connect',()=>{
      console.log('Connected', socket.id);
      setSocketID(socket.id)
    })

    socket.on('receive-message',(msg)=>{
      console.log('rm: ',msg);
      setMessages((e)=>[...e,msg])
    })
    socket.on('welcome',(s)=>{
      console.log("Cliet: ",s);
      
    });

    return ()=>{
      socket.disconnect();
    }

  },[])
  return (
    <Container maxWidth="sm">
      {
        socketID
      }

    <form  onSubmit={joinRoomHandler}>
        <TextField value={roomName} onChange={(e)=>setRoomName(e.target.value)} id="outlined-basic" label="Message" variant='outlined'/>
        <Button type='submit'  variant='contained' color='primary'>Join</Button>
      </form>
      <br/>
      <br/ >
      <form onSubmit={handleSubmit}>
        <TextField value={message} onChange={(e)=>setMessage(e.target.value)} id="outlined-basic" label="Message" variant='outlined'/>
        <TextField value={room} onChange={(e)=>setRoom(e.target.value)} id="outlined-basic" label="Room" variant='outlined'/>
        <Button type='submit'  variant='contained' color='primary'>Send</Button>
      </form>
        <ul>
        {
          messages.map((m,i)=>{
            return <li key={i}>{m}</li>
          })
        }
        </ul>
    </Container>
  )
}

export default App
