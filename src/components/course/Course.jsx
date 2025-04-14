import React from 'react';
import '../course/Course.css';
import IMG from '../../assets/img4.png';


const Course = () => {
  return (
    <div className='course'>
       <div className="course-heading">
          <h2>Our Course Workflow</h2>
          <img src={IMG} alt="" />
       </div>

       <div className="course-content">
         <div className="course-card">
            <div className="course-number">1</div>
            <div className="course-card-content">
                <h4>Identity the Task</h4>
                <p>Encourage the tutee to initiate and identity the focus of the session</p>
            </div>
         </div>
         <div className="course-card">
            <div className="course-number div-two">2</div>
            <div className="course-card-content">
                <h4>Breaking the task into parts</h4>
                <p>Provide the opportunity for the tutee to break the task into manageable pieces</p>
            </div>
         </div>
         <div className="course-card">
            <div className="course-number div-three">3</div>
            <div className="course-card-content">
                <h4>Setting an Agenda</h4>
                <p>Discuss with the tutee the amount of time necessary to complete each task.</p>
            </div>
         </div>
         <div className="course-card">
            <div className="course-number div-four">4</div>
            <div className="course-card-content">
                <h4>Tutee Summary of Thought Process</h4>
                <p>Have the tutee summarize the process of addressing ths  task type.</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Course
