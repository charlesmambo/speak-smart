import React, { useRef } from "react";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Offer from './components/offers/Offer'
import About from './components/about/About'
import Improve from './components/improve/Improve'
import Course from './components/course/Course'
import Feedback from './components/feedback/Feedback'
import Qn from './components/qn/Qn'
import Contact from './components/contact/Contact'
import Divider from './components/divider/Divider'
import Footer from './components/footer/Footer'
import Demo from './components/demo/Demo'
// import ImageSection from './components/imageSection/ImageSection'

function App() {
  const demoRef = useRef(null);

  return (
    <>
     <Navbar/>
    <Intro scrollToDemo={() => demoRef.current?.scrollIntoView({ behavior: 'smooth' })} />
     <Offer/>
     <About/>
     <Improve/>
     <Course/>
     <Feedback/>
     {/* <ImageSection/> */}
     <Demo ref={demoRef} />
     <Qn/>
     <Contact/>
     <Divider/>
     <Footer/>
    </>
  )
}

export default App
