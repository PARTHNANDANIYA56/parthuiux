import React from 'react';
import '../App.css';

function Testimonial() {
    return (
        <div className=' text-center project_test'>
            <h1>Project</h1>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img className="card-img-top" src="image/passcodelockscreen.png" alt="Pass Code Lock Screen" />
                            <div className="card-body">
                                <h5 className="card-title">Pass Code Lock Screen</h5>
                                <p className="card-text">Passcode Lockscreen: Sleek interface with customizable
                                    passcodes for secure access to your device. Intuitive and
                                    user-friendly design</p>
                                <a href="https://www.figma.com/file/Hu2iNB7JIoVKzTA3iCSbn6/Untitled?type=design&node-id=0%3A1&mode=design&t=6cFM5Cw5cA3AAnZI-1" download target="_blank" className="btn btn-warning" role="button">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img className="card-img-top" src="image/Good Night GIF.png" alt="Good Night GIF" />
                            <div className="card-body">
                                <h5 className="card-title">Good Night GIF</h5>
                                <p className="card-text">Create a serene Good Night GIF app with soothing animations,
                                    customizable texts, and a user-friendly interface for
                                    bedtime wishes</p>
                                <a href="https://www.figma.com/file/0sjFUoPsDL3qpeBl2YWI1B/Good-Night-GIF?type=design&node-id=0%3A1&mode=design&t=nZQmal2gDEZrrLcu-1" download target="_blank" className="btn btn-warning" role="button">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img className="card-img-top" src="image/lovegif.png" alt="Love GIF" />
                            <div className="card-body">
                                <h5 className="card-title">Love GIF</h5>
                                <p className="card-text">Create a captivating love-themed app design featuring
                                    animated GIFs to evoke romantic sentiments and enhance user
                                    engagement</p>
                                <a href="https://www.figma.com/file/TIdjbUsIUby0PlYDix7S41/Untitled?type=design&mode=design&t=2vardNhYtzvgLor5-1" download target="_blank" className="btn btn-warning" role="button">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img className="card-img-top" src="image/Nature Photo Frame.png" alt="Nature Photo Frame" />
                            <div className="card-body">
                                <h5 className="card-title">Nature Photo Frame</h5>
                                <p className="card-text">Nature Photo Frame: An app offering diverse frames inspired
                                    by nature, enhancing your photos with organic beauty and
                                    tranquility</p>
                                <a href="https://www.figma.com/file/w7A5m8OabxQdz6wF7hLL2g/Nature-Photo-Frame?type=design&node-id=0%3A1&mode=design&t=2vardNhYtzvgLor5-1" download target="_blank" className="btn btn-warning" role="button">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
