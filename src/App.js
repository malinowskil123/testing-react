import React from 'react'
import Button from './components/Button/Button'
import logo from './logo.svg'
import './App.css'
const handleClick = () => console.log('button clicked')
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button id='button' text='click me' handleClick={handleClick}></Button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
