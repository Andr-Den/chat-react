import React from 'react'

import './Header.css'

function Header({onClick}) {

  return (
    <div className="header">
      <button className="header__button" onClick={onClick}>Выход</button>
    </div>
  )
};

export default Header;