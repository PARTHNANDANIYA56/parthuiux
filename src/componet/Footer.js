import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('_replyto', email);
        formData.append('message', message);

        try {
            const response = await fetch('https://formspree.io/f/xleqzlyq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    };
    return (
        <>
            <div class="container">
                <div className='mt-4 text-center'>
                    <h1>Contact Us</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex gap-5 justify-content-center form_nameemail">
                        <div className="text-center w-25 ">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="change mt-3"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>
                        <div className="text-center w-25">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="change mt-3"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                    </div>

                    <div className="container text-center ">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <div className="form-group mt-3 form_textarea">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="change mt-3"
                                        rows="5"
                                        placeholder="Enter your message"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                        <button type="submit" className="btn_2">Submit</button>
                    </div>
                </form>
            </div>


            {/* Footer componet */}
            <footer class="footer mt-5 h3 ">
                <div class="container d-flex gap-3 justify-content-center footer_icon">

                    <a href="https://api.whatsapp.com/send?phone=6355304734" target='_blenk' class="social-icon"><IoLogoWhatsapp /></a>
                    <a href="https://www.facebook.com/profile.php?id=100072656256788" target='_blenk' class="social-icon "><FaFacebook /></a>
                    <a href="https://t.me/+916355304734" class="social-icon " target='_blenk'><FaTelegram /></a>
                    <a href="https://www.linkedin.com/in/parth-nandaniya-73b684224/" class="social-icon" target='_blenk'><FaLinkedin /></a>

                </div>
            </footer>
            <div className='text-center mt-3 mb-3 '>
                <a href="#" className='footer_mail'>parthnandaniya62@gmail.com</a>
            </div>
            <div className="text-center bg-dark p-3 footer_buttom">
                © 2024 Parth All Rights Reserved , Inc.
            </div>

        </>
    )
}

export default Footer
