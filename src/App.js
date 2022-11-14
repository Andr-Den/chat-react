import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import './App.css';
import Register from './components/Register';
import Chat from './components/Chat';
import Login from './components/Login';
import InfoTooltip from './components/InfoTooltip';
import Main from './components/Main';

function App() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigated = useNavigate()
  const [users, setUsers] = React.useState(JSON.parse(localStorage.getItem('usersList')));
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const [messages, setMessages] = React.useState(JSON.parse(localStorage.getItem('roomMessages')))
  const [messageText, setMessageText] = React.useState('');

  function handleRegisterSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', name);
    const newUser = {userName: name, userPassword: password}
    const sameUser = users.find(e => e.userName === name)
    if (!sameUser) {
      localStorage.setItem('usersList', JSON.stringify([...users, newUser]))
      setUsers([...users, newUser])
      navigated("/sign-in")
    } else {
      setTooltipOpen(true)
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('usersList')).find(e => e.userName === name)
    const userPassword = JSON.parse(localStorage.getItem('usersList')).find(e => e.userPassword === password)
    if (user && userPassword) {navigated("/chat")} else {navigated("/sign-up")}
  }

  function handleInfoClose(e) {
    setTooltipOpen(false)
  }

  function handleExitClick(e) {
    e.preventDefault();
    localStorage.setItem('roomMessages', JSON.stringify(messages))
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
            <Register handleSubmit={handleRegisterSubmit} name={name} password={password} setName={setName} setPassword={setPassword}/>
            {tooltipOpen ? <InfoTooltip onClose={handleInfoClose}/> : ''}
          </>
        } />
        <Route exact path="/sign-in" element = {
          <>
            <Login handleSubmit={handleLoginSubmit} setName={setName} setPassword={setPassword}/>
          </>
        } />
        <Route path="/chat" element={
          <>
            <Chat onClick={handleExitClick}  messages={messages} setMessages={setMessages}  messageText={messageText} setMessageText={setMessageText} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
