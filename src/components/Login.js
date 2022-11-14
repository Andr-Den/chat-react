import React from 'react'
import './Register.css'

import Header from './Header';

function Login({handleSubmit, onClick}) {

  return (
    <div className="page">
      <div className="sign">
      <Header onClick={onClick}/>
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input"  required/>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" required minLength="6"/>
            <input type="submit" value='Войти' name="submit_button" className={`sign__button sign__button_login`}/>
            <span className="sign__bottom">Ещё не зарегистрированы? <a href="/sign-up" className="sign__link">Регистрация</a></span>
          </fieldset> 
        </form>
      </div>
    </div>
  )
};

export default Login;