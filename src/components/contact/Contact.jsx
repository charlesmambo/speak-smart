import React, { useState } from 'react';
import '../contact/Contact.css';
import IMG from '../../assets/line.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";
    
    if (!formData.tel) newErrors.tel = "Phone number is required.";
    else if (!phoneRegex.test(formData.tel)) newErrors.tel = "Enter a valid phone number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        tel: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-heading">
        <h2>Get in touch with us</h2>
        <img src={IMG} alt="line decoration" />
        <p>Ready to boost your child's potential? Sign up today!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="form-control">
            <input 
              type="text" 
              name="name" 
              placeholder='Full Name' 
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-control">
            <input 
              type="email" 
              name="email" 
              placeholder='Email Address' 
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        <div className="input-wrapper bottom-input-wrapper">
          <div className="form-control">
            <input 
              type="tel" 
              name="tel" 
              placeholder='Phone number' 
              value={formData.tel}
              onChange={handleChange}
            />
            {errors.tel && <span className="error">{errors.tel}</span>}
          </div>
          <div className="form-control">
            <input 
              type="text" 
              name="subject" 
              placeholder='Subject' 
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>
        </div>

        <div className="form-contro">
          <textarea 
          className='textarea'
            name="message" 
            placeholder='Write a message...' 
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <div className="submit">
          <button type="submit">Send a Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
