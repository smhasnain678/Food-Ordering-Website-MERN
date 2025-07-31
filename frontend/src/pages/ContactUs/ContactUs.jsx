import React from 'react';
import './ContactUs.css';
import { assets } from '../../assets/assets';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <section className="contact-hero">
                <h1 className="contact-title">Contact Us</h1>
                <h2 className="contact-subtitle">Have questions? Get in touch!</h2>
            </section>

            <section className="contact-content">
                <div className="contact-form">
                    <h3 className="form-title">Send Us a Message</h3>
                    <form>
                        <input type="text" placeholder="Your Name" className="form-input" />
                        <input type="email" placeholder="Your Email" className="form-input" />
                        <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                        <button type="submit" className="form-submit">Send</button>
                    </form>
                </div>

                <div className="contact-details">
                    <h3 className="details-title">Contact Information</h3>
                    <p className="detail-item">
                        <h4>Working Hours</h4>
                        <span>Mon-Fri: 9 AM – 6 PM</span>
                        <span>Saturday: 9 AM – 4 PM</span>
                        <span>Sunday: Closed</span></p>
                    <p className="detail-item"><h4>Address</h4>
                        <span>785 Street, Office 478, Berlin, DE 81566, Germany</span>
                    </p>
                    <p className="detail-item"><h4>Get In Touch</h4>
                        <span>info@easyeat.com</span></p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;