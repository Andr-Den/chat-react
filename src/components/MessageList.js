import React from 'react'
import Message from './Message';

import './MessageList.css'

function MessageList({messages}) {

  return (
    <div className="message-list__field">
        <ul className="message-list">
          {messages.map(({name, text}, index) => (
            <Message name={name} text={text} key={index}/>
          ))}
        </ul>
    </div>
)}

export default MessageList;
