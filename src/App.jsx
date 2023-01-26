import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
          
      <Route path='/Home' element={<Home/>} />
            
          
      </Routes>
  )
}

export default App
