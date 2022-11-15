import React from 'react'

import './InfoTooltip.css'

function InfoTooltip({onClose, description}) {

  return (
    <div className="tooltip" >
        <div className="tooltip__container">
          <button className="tooltip__icon" type="button" onClick={onClose}></button>
          <h2 className="tooltip__title">{description}</h2>
        </div>
    </div>
  )
}

export default InfoTooltip;