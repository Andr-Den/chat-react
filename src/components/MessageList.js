import React from 'react'
import Message from './Message';

import './MessageList.css'

function MessageList() {

  const messages = [
    {
      name: "Petya",
      text: "HHVBDSBC SBsjBCd,sc "
    },
    {
      name: "Petya",
      text: "2"
    },
    {
      name: "Petya",
      text: "H3"
    }
  ]

  return (
    <>
        <ul className="message-list">
          {messages.map(({name, text}, index) => (
            <Message name={name} text={text} key={index}/>
          ))}
        </ul>
      </>
)}

export default MessageList;
