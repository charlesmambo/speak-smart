import React, { useState } from 'react';
import '../qn/Qn.css';
import { IoIosArrowDown } from "react-icons/io";

const questions = [
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free or discounted trial lesson so you can get a feel for our tutoring style and see if it's the right fit for you. It’s a great opportunity to meet your tutor, discuss your learning goals, and experience how we can support your academic journey—no commitment required."
  },
  {
    question: "What age groups do you cater to?",
    answer: "We cater to students of all ages, from primary school to high school. Whether your child is just starting to build their foundation or preparing for final exams, we offer personalized support tailored to their grade level and learning style."
  },
  {
    question: "Do you help with homework or exam preparation?",
    answer: "Yes, we do! Whether you need help understanding a concept, completing an assignment, or preparing for exams, our tutors are here to support you."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free or discounted trial lesson so you can get a feel for our tutoring style and see if it's the right fit for you. It’s a great opportunity to meet your tutor, discuss your learning goals, and experience how we can support your academic journey—no commitment required."
  }
];

const Qn = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='qn'>
      <div className="qn-heading">
        <h2>Frequently asked questions</h2>
        <p>These are most commonly asked questions at Speaking Smart Tutoring</p>
      </div>

      <div className="qn-toggle-container">
        {questions.map((item, index) => (
          <div className={`qn-toggle ${openIndex === index ? 'open' : ''}`} key={index}>
            <div className="toggle-heading" onClick={() => toggleAnswer(index)}>
              <h4>{item.question}</h4>
              <IoIosArrowDown className='qn-icon' />
            </div>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qn;
