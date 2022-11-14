import React from 'react'

import MessageList from './MessageList';
import Header from './Header';

import './Chat.css'

function Chat({ setMessageText, messageText, setMessages, messages, onClick }) {
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
      <h2 className="chat__title">Комната А</h2>
      {messages.length !== 0 ? <MessageList messages={messages}/>: ''}
      <form onSubmit={handleMessageSubmit}>
        <input type="text" onChange={handleTextChange} value={messageText || ''}/>
        <input type="submit" value="Отправить" name="submit_button" className={`sign__button`} />
      </form>
    </div>
  )
};

export default Chat;
