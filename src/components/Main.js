import React from 'react'
import { Link } from 'react-router-dom'

import './Main.css'

function Main() {

  return (
    <div className="main">
      <div className="main__container">
        <Link to="/sign-up" className="main__links">Зарегистрироваться</Link>
        <Link to="/sign-in" className="main__links">Войти</Link>
      </div>
    </div>
  )
};

export default Main;