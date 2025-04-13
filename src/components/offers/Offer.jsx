import React from 'react';
import '../offers/Offer.css';
import IMG from '../../assets/line.png';
import IMG1 from '../../assets/1mg2.png';
import IMG2 from '../../assets/vector.png';
import IMG3 from '../../assets/img1.png';
import IMG4 from '../../assets/img.png';

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offere-heading">
            <h2>What we offer</h2>
            <img src={IMG} alt="" />
        </div>

        <div className="offers-content-wrapper">
            <div className="offer-content">
                <div className="offer-img pl">
                <img src={IMG1} alt="" />
                </div>
                <h3>Personalized Learning</h3>
                <p>We tailor lessons to each student’s unique learning style, ensuring they understand concepts, gain confidence, and enjoy the learning journey.</p>
            </div>
            <div className="offer-content">
               <div className="offer-img se">
                 <img src={IMG2} alt="" />
                </div>
                <h3>A Supportive and Encouraging Environment</h3>
                <p>Learning happens best in a space where students feel safe, supported, and valued. We prioritize building strong relationships with our students, creating an atmosphere where they feel comfortable asking questions, making mistakes, and growing academically without fear of judgment.</p>
            </div>
        </div>

        <div className="offers-content-wrapper bottom-grid">
            <div className="offer-content">
                <div className="offer-img fi">
                <img src={IMG3} alt="" />
                </div>
                <h3>Fun and Interactive Teaching Methods</h3>
                <p>We make learning exciting through gamification techniques like quizzes, challenges, and interactive activities. These methods keep students engaged, improve knowledge retention, and enhance problem-solving skills while making education enjoyable.</p>
            </div>
            <div className="offer-content">
               <div className="offer-img mt">
                 <img src={IMG4} alt="" />
                </div>
                <h3>More Than Just Tutoring</h3>
                <p>Our goal is not just to help students pass exams but to develop lifelong learning skills. By making education stress-free and enjoyable, we instill confidence, independence, and a lasting love for learning in every student.</p>
            </div>
        </div>
    </div>
  )
}

export default Offer