import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import './App.css';
import Register from './components/Register/Register';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import InfoTooltip from './components/InfoTooltip/InfoTooltip';
import Main from './components/Main/Main';

function App() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [room, setRoom] = React.useState('');
  const navigated = useNavigate()
  const [users, setUsers] = React.useState(JSON.parse(localStorage.getItem('usersList')) || []);
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const [messagesA, setMessagesA] = React.useState(JSON.parse(localStorage.getItem('roomMessagesA')) || [])
  const [messagesB, setMessagesB] = React.useState(JSON.parse(localStorage.getItem('roomMessagesB')) || [])
  const [messageText, setMessageText] = React.useState('');

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const newUser = {userName: name, userPassword: password}
    const sameUser = users.find(e => e.userName === name)
    if (!sameUser) {
      localStorage.setItem('user', name);
      localStorage.setItem('usersList', JSON.stringify([...users, newUser]))
      setUsers([...users, newUser])
      navigated("/sign-in")
    } else {
      setTooltipOpen(true)
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', name);
    const user = JSON.parse(localStorage.getItem('usersList')).find(e => e.userName === name)
    const userPassword = JSON.parse(localStorage.getItem('usersList')).find(e => e.userPassword === password)
    if (user && userPassword) {
      navigated(`/${room}`)
    } else {
      setTooltipOpen(true)
    }
  }

  function handleInfoClose(e) {
    setTooltipOpen(false)
  }

  function handleExitClick(e) {
    e.preventDefault();
    if (room === 'chatA') {
      localStorage.setItem('roomMessagesA', JSON.stringify(messagesA))
    } else {
      localStorage.setItem('roomMessagesB', JSON.stringify(messagesB))
    }
    localStorage.removeItem('user');
    navigated("/")
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element = {
          <>
            <Main />
          </>
        }>

        </Route>
        <Route path="/sign-up" element = {
          <>
            <Register
              handleSubmit={handleRegisterSubmit}
              name={name}
              password={password}
              setName={setName}
              setPassword={setPassword}
            />
            {tooltipOpen ? <InfoTooltip onClose={handleInfoClose} description="Пользователь с таким именем уже существует"/> : ''}
          </>
        } />
        <Route exact path="/sign-in" element = {
          <>
            <Login
              handleSubmit={handleLoginSubmit}
              setName={setName}
              setPassword={setPassword}
              setRoom={setRoom}
            />
            {tooltipOpen ? <InfoTooltip onClose={handleInfoClose} description="Неверный логин или пароль"/> : ''}
          </>
        } />
        <Route path="/chatA" element={
          <>
            <Chat
              onClick={handleExitClick}
              messages={messagesA}
              setMessages={setMessagesA}
              messageText={messageText}
              setMessageText={setMessageText}
              title="Комната А"
            />
          </>
        } />
        <Route path="/chatB" element={
          <>
            <Chat
              onClick={handleExitClick}
              messages={messagesB}
              setMessages={setMessagesB}
              messageText={messageText}
              setMessageText={setMessageText}
              title="Комната Б"
            />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
