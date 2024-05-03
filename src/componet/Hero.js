import React from 'react'
import '../App.css';

function Hero() {
    return (
        <>
            <div className='container'>
                <div className='align-items-center d-flex'>
                    <div className='text-white '>
                        <h1>
                            Hello, I'm Parth Nandaniya
                            <br />
                            UI & UX Designer
                        </h1>
                        <p>
                            i'm a Parth Nandaniya based UI/UX Designer. Designer Creating
                            Awesome And Effective Visul Identities For Companies Of All Size
                            Around The Globe
                        </p>
                        <div className="d-flex mt-4 gap-3">
                            <a
                                href="https://www.linkedin.com/in/parth-nandaniya-73b684224/" target="_blank"
                                className="btn_1 mr-2"
                                role="button"
                            >
                                HIRE ME
                            </a>
                            <a
                                href="image/ParthNandaniya.pdf"
                                download
                                target="_blank"
                                className="btn_1"
                                role="button"
                            >
                                GET RESUME
                            </a>
                        </div>
                    </div>

                    {/* Hero img */}
                    <div className=''>

                        <div>
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="image/parth.jpg"
                                width={550}
                            />
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
