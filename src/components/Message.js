import React from 'react'

import './Message.css'

function Message({name, text}) {

  return (
    <li>
      <h3 className="message__title">{name}</h3>
      <p className="message__text">{text}</p>
    </li>
)}

export default Message;