import React from 'react';
import '../feedback/Feedback.css';
import { IoIosStar } from "react-icons/io";
import PrimaryBtn from '../buttons/PrimaryBtn';
import ArrowBtn from '../arrowBtn/ArrowBtn';


const Feedback = () => {
  return (
    <div className='feedback'>
        <div className="feedback-heading">
            <h2>Our Student Feedback</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nisl ut.</p>
        </div>

        <div className="feedback-cards-container">
            <div className="feedback-card">
                <h4>Lerato</h4>
                <div className="feedback-rate">
                    <p>Student/Parent</p>
                    <div className="stars">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </div>
                </div>
                <p className='card-text'>I used to struggle with Mathematics, but after just a few sessions with my tutor, I started understanding concepts I had never been able to grasp before. They were patient, explained things clearly, and made learning enjoyable. Thanks to them, I went from failing to passing with confidence. </p>
            </div>
            <div className="feedback-card">
                <h4>Thando</h4>
                <div className="feedback-rate">
                    <p>Student/Parent</p>
                    <div className="stars">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </div>
                </div>
                <p className='card-text'>This one on one tutoring made my child to feel proud about her progress and she is confident with her math skills.</p>
            </div>
            <div className="feedback-card">
                <h4>Lisa</h4>
                <div className="feedback-rate">
                    <p>Student/Parent</p>
                    <div className="stars">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </div>
                </div>
                <p className='card-text'>The tutor was always punctual and well-prepared. They tailored the lessons to my pace and helped me prepare for my final exams. I appreciated how organized and friendly they were. I’m now looking to book lessons for next term too! </p>
            </div>
        </div>
        {/* <div className="feedback-btn-container">
            <div className="feedback-btn">
            <PrimaryBtn text="book demo" className="intro-btn" />
            <ArrowBtn/>
           </div>
        </div> */}
    </div>
  )
}

export default Feedback
