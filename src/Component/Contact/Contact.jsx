
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./style.css";
import Image1 from "../../assets/images/contact/contact1.png"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e3kb3l2', 'template_rcdpro6', form.current, 'yC7VPpk-QNjJ0XL3E')
        .then((result) => {
              console.log('Email sent:', result.text);
        }, (error) => {
              console.log('Error:', error.text);
        });
    
        e.target.reset(); // clear form
    };
    return (
        <>
            <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Contact</span>
                                <h2 className="title">Contact With Me</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                        <div className="col-lg-5">
                            <div className="contact-about-area">
                                <div className="thumbnail">
                                    <img src={Image1} alt="contact-img" />
                                </div>
                                <div className="title-area">
                                    <h4 className="title">Sanjay Ramdati</h4>
                                    <span>Full Stack Developer</span>
                                </div>
                                <div className="description">
                                    <p>
                                        I am available for freelance work. Connect with me via email and call in to my account.
                                    </p>
                                    <span className="phone">Phone: <a href="tel:01941043264">+91 9724207456</a></span>
                                    <span className="mail">Email: <a href="mailto:sanjayramdati99@gmail.com">sanjayramdati99@gmail.com</a></span>
                                </div>
                                <div className="social-area">
                                    <div className="name">FIND WITH ME</div>
                                    <div className="social-icone">
                                        <a target="_blank" href="https://linkedin.com/in/sr-developer-46508b2aa">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/sanjay_ramdati_99">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos-delay="600" className="col-lg-7 contact-input">
                            <div className="contact-form-wrapper">
                                <div className="introduce">
                                    {/* <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php"> */}
                                    <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" ref={form} onSubmit={sendEmail}>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Your Name</label>
                                                <input className="form-control form-control-lg" name="name" id="contact-name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label >Phone Number</label>
                                                <input className="form-control" name="phone" id="contact-phone" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label >Email</label>
                                                <input className="form-control form-control-sm" id="email" name="email" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label >subject</label>
                                                <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label >Your Message</label>
                                                <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button name="submit" type="submit" id="submit" className="rn-btn">
                                                <span>SEND MESSAGE</span>
                                                <i data-feather="arrow-right"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;