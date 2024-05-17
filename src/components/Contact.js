import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS parameters
        const serviceID = 'service_owqo9te';  // Replace with your actual service ID
        const templateID = 'template_hjb2kx7';  // Replace with your actual template ID
        const userID = 'cQ35od5KN579VTJni';  // Replace with your actual user ID

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
      };
  
      emailjs.send(serviceID, templateID, templateParams, userID)
          .then(response => {
              console.log('SUCCESS!', response.status, response.text);
              alert('Message sent!');
          }, error => {
              console.log('FAILED...', error);
              alert('Failed to send the message, please try again.');
          });
  };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                </div>
                <label>Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
            <p><strong>Email: </strong>rorydriscoll520@gmail.com</p>
            <p><strong>Phone Number: </strong>781-588-7085</p>
        </section>
    );
};

export default Contact;
