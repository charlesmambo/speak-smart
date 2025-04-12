import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'

function App() {

  return (
    <>
     <Navbar/>
     <Intro/>
    </>
  )
}

export default App
