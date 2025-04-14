import React from 'react';
import '../about/About.css';
import IMG from '../../assets/img4.png';
import PrimaryBtn from '../buttons/PrimaryBtn';
import ArrowBtn from '../arrowBtn/ArrowBtn';

const About = () => {
  return (
    <div className='abt'>
                <div className="abt-heading">
                    <h2>About Us</h2>
                    <img src={IMG} alt="" />
                </div>
        
                <div className="abt-content-wrapper">
                    <div className="abt-content">
                        <p>Speak Smart Tutoring is dedicated and passionate tutoring service offering personalized learning experiences to students of all levels. Our goal is to foster academic excellence and instill confidence in our students by providing high-quality tutoring in both online and in-person formats. Whether it’s mastering core subjects or honing specialized skills.</p>
                    </div>
                    <div className="abt-content">
                        <h3>Our Vision</h3>
                        <p>Our vision is to reshape the learning experience by making education accessible, enjoyable, and impactful for every student. At Speak Smart Tutoring, we don’t believe in boring, traditional learning methods—we believe in making learning FUN and INTERACTIVE!</p>
                    </div>
                </div>
        
                <div className="abt-content-wrapper bottom-wrapper">
                    <div className="abt-content">
                        <p>At Speak Smart Tutoring , we are ambitious about helping students overcome academic challenges and develop skills that will serve them both in school and beyond. We believe in not just improving grades but nurturing a genuine understanding of subjects and a passion for learning . We are committed to working with students patiently, diligently and effectively, ensuring they get the support they need in every lesson. </p>

                        <div className="abt-btns">
                            <PrimaryBtn text="book demo" className="intro-btn" />
                            <ArrowBtn/>
                        </div>
                    </div>
                    <div className="abt-content">
                        <h3>Our Mission</h3>
                        <p>At Speak Smart Tutoring, our mission is to provide personalized, high-quality education that builds confidence, critical thinking, and academic excellence. We tailor lessons to each student’s learning style, ensuring they understand concepts and enjoy learning. By fostering strong relationships, we create a supportive environment where students feel valued, motivated, and empowered to succeed.</p>
                    </div>
    </div>
    </div>
  )
}

export default About