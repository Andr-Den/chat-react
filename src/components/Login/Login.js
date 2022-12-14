import React from 'react'
import '../Register/Register.css'

function Login({handleSubmit, setName, setPassword, setRoom}) {

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRoomChange(e) {
    setRoom(e.target.value)
  }

  return (
    <div className="page">
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <fieldset className="sign__container">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <span className="sign__description">Имя</span>
            <input type="text" className="sign__input"  required onChange={handleNameChange}/>
            <span className="sign__description">Пароль</span>
            <input type="password" className="sign__input" required minLength="6"  onChange={handlePasswordChange}/>
            <span className="sign__description">Комната</span>
            <select className="sign__input" name="rooms" required onChange={handleRoomChange}>
              <option >Выберите комнату</option>
              <option value="chatA">Комната А</option>
              <option value="chatB">Комната Б</option>
            </select>
            <input type="submit" value='Войти' name="submit_button" className={`sign__button sign__button_login`} />
            <span className="sign__bottom">Ещё не зарегистрированы? <a href="/sign-up" className="sign__link">Регистрация</a></span>
          </fieldset> 
        </form>
      </div>
    </div>
  )
};

export default Login;