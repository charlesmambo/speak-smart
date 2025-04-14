import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Offer from './components/offers/Offer'
import About from './components/about/About'
import Improve from './components/improve/Improve'
import Course from './components/course/Course'
import Feedback from './components/feedback/Feedback'

function App() {

  return (
    <>
     <Navbar/>
     <Intro/>
     <Offer/>
     <About/>
     <Improve/>
     <Course/>
     <Feedback/>
    </>
  )
}

export default App
