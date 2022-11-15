import React from 'react'

import './Message.css'

function Message({name, text}) {

  let className = ''

  if (name === localStorage.getItem('user')) {
    className = 'message__right'
  } else {
    className = 'message__left'
  }

  return (
      <li className={className}>
        <h3 className="message__title">{name}</h3>
        <p className="message__text">{text}</p>
      </li>
)}

export default Message;