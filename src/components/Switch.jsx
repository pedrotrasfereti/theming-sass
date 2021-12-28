import React from 'react'

const Switch = ({ handleToggle }) => {
  return (
    <li id="SwitchContainer" className="Item">
      <span className="Heading">
        Modo Escuro
      </span>
      <label id="Switch">
        <input
          id="Checkbox"
          type="checkbox"
          onClick={() => handleToggle()}
        />
        <span id="Slider" />
      </label>
    </li>
  )
}

export default Switch
