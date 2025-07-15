import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/contact.css';
import { FiMail, FiPhone } from 'react-icons/fi';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    toggleModal();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Get in Touch</h1>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">
              <FiMail size={28} />
            </span>
            <div className="item-content">
              <h3>Email Addresses</h3>
              <p><a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a></p>
              <p><a href="mailto:sakib_41240102036@nub.ac.bd">sakib_41240102036@nub.ac.bd</a></p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">
              <FiPhone size={28} />
            </span>
            <div className="item-content">
              <h3>Phone Numbers</h3>
              <p><a href="tel:+8801313186576">+8801313186576</a></p>
              <p><a href="tel:+8801516542017">+8801516542017</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section message-section">
        <h2>Send Us a Message</h2>
        <p>Have a question or feedback? Feel free to reach out to us directly via email, or use the form below.</p>
        <div className="message-buttons-group">
          <a href="mailto:nazmuss024@gmail.com" className="direct-email-button">
            Send Direct Email
          </a>
          <button onClick={toggleModal} className="email-button">
            Open Contact Form
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <button className="modal-close-btn" onClick={toggleModal}>✕</button>
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-form-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
