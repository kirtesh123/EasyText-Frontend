import React, { useEffect, useState } from 'react';
import axios from './axios';
import Pusher from 'pusher-js';
import './App.css';
import { FormControl, Input } from '@material-ui/core'
import Message from './Message';
import Scroll from "./Scroll";
import FlipMove from 'react-flip-move'
import Button from '@material-ui/core/Button'


var pusher = new Pusher('bc9f3e4c53a45152caee', {
  cluster: 'us2'
});

const App = () => {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  const sync = async () => {
    await axios.get('/retrieve/conversation')
    .then ( res => {
      setMessages(res.data);
    })
  }

  useEffect(() => {
    sync();
  }, [])

  useEffect(() => {
    const channel = pusher.subscribe('messages');
    channel.bind('newMessage', function(data) {
      sync()
    });
  }, [username])

  useEffect(() => {
    setUsername(prompt('Enter your name'))
  }, [])

  const handleSend = (e) => {
    e.preventDefault()

    axios.post('/save/message', {
      username: username,
      message: input,
      timestamp: Date.now()

    })
    setInput('')
  }

  return (
    <div className="App">
      <Scroll username={username}/>
      <div className="messages" >
        <FlipMove>
          {
            messages.map( message => (
              <Message key={message._id} message={message} username={username} />
            ))
          }
        </FlipMove>
      </div>
      <div className="form-background" >
        <form >
          <FormControl className='formControl' >
            <Input className='input' placeholder='Type a message...' value={input} onChange={(e) => setInput(e.target.value)} />
            <Button className='iconButton' variant='text' color='primary' disabled={!input} onClick={handleSend} type="submit" >
              SEND
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default App;
