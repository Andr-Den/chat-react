import React from 'react'
import './Register.css'

function Register({name, password, handleSubmit, setName, setPassword}) {

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input" value={name || ''} onChange={handleNameChange} minLength="2" maxLength="30" required/>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" value={password || ''} onChange={handlePasswordChange} required minLength="6"/>
            <input type="submit" value="Зарегистрироваться" name="submit_button" className={`sign__button`} />
            <span className="sign__bottom">Уже зарегистрированы? <a href="/sign-in" className="sign__link">Войти</a></span>
          </fieldset> 
        </form>
      </div>
  )
};

export default Register;