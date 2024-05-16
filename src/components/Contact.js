import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    }

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
          <p>Email: rorydriscoll520@gmail.com</p>
          <p>Phone: 781-588-7085</p>
          <div className="section-divider"></div>
        </section>
      );
    };
    
    export default Contact;