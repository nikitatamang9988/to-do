import React from 'react'
import "./Button.css"
export default function Button({name, cardButton, onTaskSubmit}) {
  return (
    <button className={cardButton ? "circle-button" : "normal-button"} onClick={onTaskSubmit} >
        {name}
    </button>
  )
}

