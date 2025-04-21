import React from 'react';
import '../contact/Contact.css';
import IMG from '../../assets/line.png';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-heading">
        <h2>Get in touch with us</h2>
        <img src={IMG} alt="" />
        <p>Ready to boost your child's potential? Sign up today!</p>
      </div>
      
      <form action="">
        <div className="input-wrapper">
        <div className="form-control">
            <input type="text" name="name"  placeholder='Full Name'/>
        </div>
        <div className="form-control">
            <input type="email" name="email" placeholder='Email Address' />
        </div>
        </div>

        <div className="input-wrapper bottom-input-wrapper">
        <div className="form-control">
            <input type="tel" name="tel" placeholder='Phone number'/>
        </div>
        <div className="form-control">
            <input type="text" name="subject" placeholder='Subject'/>
        </div>
        </div>
        <div className="">
            <textarea name="message" placeholder='Write a message...'></textarea>
        </div>
        <div className="submit">
            <button type="submit">send a message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
