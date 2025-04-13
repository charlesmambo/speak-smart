import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Hero from './components/hero/Hero'
import Offer from './components/offers/Offer'

function App() {

  return (
    <>
     <Navbar/>
     <Intro/>
     <Offer/>
    </>
  )
}

export default App
