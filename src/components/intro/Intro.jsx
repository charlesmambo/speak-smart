import React from 'react'
import '../intro/Intro.css'
import PrimaryBtn from '../buttons/PrimaryBtn'
import ArrowBtn from '../arrowBtn/ArrowBtn'
import Hero from '../hero/Hero'

const Intro = () => {
  return (
    <div className='intro-wrapper'>
    <div className='intro'>
      <div className="intro-heading">
        <h1>Personalized Tutoring That Goes Beyond Grades</h1>
      </div>

      <div className="intro-content">
        <p>At Speak Smart Tutoring, we believe that when learning is engaging, stress-free, and exciting, students develop a love for education that lasts a lifetime. We are more than just a tutoring service—we are partners in your child’s academic success!</p>

        <div className="intro-btn-container">
           <PrimaryBtn text="book demo" className="intro-btn" />
           <ArrowBtn/>
        </div>
      </div>
    </div>
    <Hero/>
    </div>
  )
}

export default Intro
