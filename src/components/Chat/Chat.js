import React from 'react'

import MessageList from '../MessageList/MessageList';
import Header from '../Header/Header';

import './Chat.css'

function Chat({ setMessageText, messageText, setMessages, messages, onClick, title }) {

  function handleTextChange(e) {
    setMessageText(e.target.value);
  }

  function handleMessageSubmit(e) {
    e.preventDefault();
    const userName = localStorage.getItem('user')
    const message = {name: userName, text: messageText}
    setMessages([...messages, message])
    setMessageText('')
  }

  React.useEffect(() => {
    
  }, [messages])

  return (
    <div className="page">
      <Header onClick={onClick}/>
      <div className="chat">
        <h2 className="chat__title">{title}</h2>
        {messages ? <MessageList messages={messages} />: ''}
        <form onSubmit={handleMessageSubmit}  className="chat__form">
          <input type="text" onChange={handleTextChange} value={messageText || ''} className="chat__input"/>
          <input type="submit" value="Отправить" name="submit_button" className="chat__button" />
        </form>
      </div>
    </div>
  )
};

export default Chat;
