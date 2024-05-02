import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div class="container">
                <div className='mt-4 text-center'>
                    <h1>Contact Us</h1>
                </div>
                <form >
                    <div class="d-flex gap-5 justify-content-center">
                        <div class=" text-center w-25">
                            <label htmlFor="Name">Name</label>
                            <input type="text" class="form-control mt-3" placeholder="Enter Your Name" required />
                        </div>
                        <div class="text-center w-25">
                            <label htmlFor="email">Email</label>
                            <input type="email" class="form-control mt-3" placeholder="Enter Your Email" required />
                        </div>
                    </div>

                    <div class="container text-center">
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div class="form-group mt-3">
                                    <label for="message">Message</label>
                                    <textarea class="form-control mt-3" id="message" rows="5" column="1000" placeholder="Enter your message" required></textarea>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex justify-content-center mt-5'>
                        <button type="submit" class="btn btn-outline-warning">Submit</button>
                    </div>
                </form>
            </div>


            {/* Footer componet */}
            <footer class="footer mt-5 h3 ">
                <div class="container d-flex gap-2 justify-content-center">

                    <a href="https://api.whatsapp.com/send?phone=6355304734" target='_blenk' class="social-icon  text-warning"><IoLogoWhatsapp /></a>
                    <a href="https://www.facebook.com/profile.php?id=100072656256788" target='_blenk' class="social-icon  text-warning"><FaFacebook /></a>
                    <a href="https://t.me/+916355304734" class="social-icon  text-warning" target='_blenk'><FaTelegram /></a>
                    <a href="https://www.linkedin.com/in/parth-nandaniya-73b684224/" class="social-icon  text-warning" target='_blenk'><FaLinkedin /></a>

                </div>
            </footer>
            <div className='text-center mt-3 mb-3 '>
                <a href="#" className='text-warning'>parthnandaniya62@gmail.com</a>
            </div>
            <div className="text-center bg-dark p-3">
                © 2024 Parth All Rights Reserved , Inc.
            </div>

        </>
    )
}

export default Footer
