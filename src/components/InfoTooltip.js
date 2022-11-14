import React from 'react'

import './InfoTooltip.css'

function InfoTooltip({onClose}) {

  return (
    <div className="tooltip" >
        <div className="tooltip__container">
          <button className="tooltip__icon" type="button" onClick={onClose}></button>
          <h2 className="tooltip__title">Пользователь с таким именем уже существует</h2>
        </div>
    </div>
  )
}

export default InfoTooltip;