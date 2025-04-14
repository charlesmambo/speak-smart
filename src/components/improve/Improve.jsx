import React from 'react';
import '../improve/Improve.css';
import IMG from '../../assets/img3.png';
import IMG1 from '../../assets/grads.png';
import IMG2 from '../../assets/vector1.png';
import IMG3 from '../../assets/md-art.png';
import IMG4 from '../../assets/img1.png';

const Improve = () => {
  return (
    <div className='improve'>
      <div className="improve-heading">
        <h2>We Improve</h2>
        <img src={IMG} alt="" />
        </div>

        <div className="improve-cards-container">
            <div className="card academics">
                <div className="card-img ac-img">
                  <img src={IMG1} alt="" />
                </div>
                <h4>Academics</h4>
                <p>We strengthen understanding in core subjects like Mathematics, Science, and English. Our lessons are personalized to match each student’s learning pace.</p>
            </div>
            <div className="card extended">
                <div className="card-img ext-img">
                  <img src={IMG2} alt="" />
                </div>
                <h4>Extended Learning Areas</h4>
                <p>We build essential life skills like time management, communication, and problem-solving. These skills go beyond academics and support personal growth.</p>
            </div>
        </div>
        <div className="improve-cards-container ac-bottom-box">
            <div className="card arts">
                <div className="card-img art-img">
                  <img src={IMG3} alt="" />
                </div>
                <h4>Arts</h4>
                <p>We encourage self-expression through visual arts, music, and drama. Students explore their creativity in a fun and supportive environment.</p>
            </div>
            <div className="card hobbies">
                <div className="card-img hb-img">
                  <img src={IMG4} alt="" />
                </div>
                <h4>Hobbies</h4>
                <p>Whether it’s coding, chess, or creative writing, we help students develop their interests into practical skills. Hobbies become tools for focus, discipline, and self-growth. Learning is fun and purposeful.</p>
            </div>
        </div>
      </div>
  )
}

export default Improve
