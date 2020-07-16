import React from 'react'
import './Button.css'

const lightModeStyle = {
    background: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
  },
  darkModeStyle = {
    background: '#000000',
    color: '#ffffff',
    border: '2px solid #ffffff',
  }

const hoverChange = (id, scaleUp = false) => {
  const button = document.getElementById(id)
  button.style.animation = `${
    scaleUp ? 'scale-up' : 'scale-down'
  } 0.3s ease-in forwards`
}

export default function Button(props) {
  const { id, text, handleClick, darkMode } = props
  let borderColorHover = darkMode ? '#00c6af' : 'orangered',
    backgroundColorHover = darkMode ? 'darkgray' : '#f3f3f3'
  return (
    <>
      <style>{`.Button:hover{
        background: ${backgroundColorHover} !important;
        border:2px solid ${borderColorHover} !important;
        outline:none !important;
      }`}</style>
      <button
        id={id}
        className='Button'
        style={darkMode ? darkModeStyle : lightModeStyle}
        onClick={handleClick}
        onMouseEnter={() => hoverChange(id, true)}
        onMouseLeave={() => hoverChange(id)}
      >
        {text}
      </button>
    </>
  )
}
