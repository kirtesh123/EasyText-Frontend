import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef( ({ message, username }, ref) => {

    const isUser = username === message.username;

    return (

        <div ref={ref} className={`message ${isUser && 'user'}`} >
            <div className="username">
                {!isUser && `${message.username || 'Anonymous'}`} 
            </div>
            <Card className={isUser ? 'userCard' : 'guestCard'}>
                <CardContent>{message.message}</CardContent>
            </Card>
        </div>
        
    )
})

export default Message;
