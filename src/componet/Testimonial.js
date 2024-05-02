import React, { useState } from 'react';

const cardData = [
    {
        imgSrc: "image/passcodelockscreen.png",
        alt: "Pass Code Lock Screen",
        title: "Pass Code Lock Screen",
        description: "Passcode Lockscreen: Sleek interface with customizable passcodes for secure access to your device. Intuitive and user-friendly design",
        link: "https://www.figma.com/file/Hu2iNB7JIoVKzTA3iCSbn6/Untitled?type=design&node-id=0%3A1&mode=design&t=6cFM5Cw5cA3AAnZI-1"
    },
    {
        imgSrc: "image/Good Night GIF.png",
        alt: "Good Night GIF",
        title: "Good Night GIF",
        description: "Create a serene Good Night GIF app with soothing animations, customizable texts, and a user-friendly interface for bedtime wishes",
        link: "https://www.figma.com/file/0sjFUoPsDL3qpeBl2YWI1B/Good-Night-GIF?type=design&node-id=0%3A1&mode=design&t=nZQmal2gDEZrrLcu-1"
    },
    {
        imgSrc: "image/lovegif.png",
        alt: "Love GIF",
        title: "Love GIF",
        description: "Create a captivating love-themed app design featuring animated GIFs to evoke romantic sentiments and enhance user engagement",
        link: "https://www.figma.com/file/TIdjbUsIUby0PlYDix7S41/Untitled?type=design&mode=design&t=2vardNhYtzvgLor5-1"
    },
    {
        imgSrc: "image/Nature Photo Frame.png",
        alt: "Nature Photo Frame",
        title: "Nature Photo Frame",
        description: "Nature Photo Frame: An app offering diverse frames inspired by nature, enhancing your photos with organic beauty and tranquility",
        link: "https://www.figma.com/file/w7A5m8OabxQdz6wF7hLL2g/Nature-Photo-Frame?type=design&node-id=0%3A1&mode=design&t=2vardNhYtzvgLor5-1"
    },
    {
        imgSrc: "image/FurnitureLanding Page.jpg",
        alt: "Furniture Landing Page",
        title: "Furniture Landing Page",
        description: "The e-Commerce Website design template is easy to customize, making it even easier for you to design your next website or project, and speed up ",
        link: "https://furniture-seven-ashen.vercel.app/"
    },
    {
        imgSrc: "image/insurance-agency.png",
        alt: "insurance-agency",
        title: "Insurance-Agency",
        description: "Sleek, professional insurance agency website design, blending trust, clarity, and accessibility for clients' peace of mind.",
        link: "https://insurance-agency-34wu6rtu3-parths-projects-89c39c81.vercel.app/"
    },
    {
        imgSrc: "image/app dashboard.png",
        alt: "App Dashboard",
        title: "App Dashboard",
        description: "Modern, intuitive app dashboard design, optimizing usability, aesthetics, and functionality for seamless user experience.",
        link: "https://ding-estate.vercel.app/"
    },
    {
        imgSrc: "image/keepnotes.png",
        alt: "Keep Notes",
        title: "Keep Notes",
        description: "Sleek, organized Keep Notes website design, prioritizing simplicity, accessibility, and efficient note-taking capabilities.",
        link: "https://keep-app-three.vercel.app/"
    }

];

const Card = ({ imgSrc, alt, title, description, link }) => (
    <div className="col-md-3 mb-4 mt-5">
        <div className="card">
            <img className="card-img-top" src={imgSrc} alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} download target="_blank" className="btn_1" role="button">
                    Learn More
                </a>
            </div>
        </div>
    </div>
);

const App = () => {
    const [showAppDesign, setShowAppDesign] = useState(true);

    const handleAppDesignClick = () => {
        setShowAppDesign(true);
    };

    const handleWebDesignClick = () => {
        setShowAppDesign(false);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="text-center w-50 mt-4">
                    <h2><b>My Projects</b></h2>
                    <p>"My Projects" showcases a curated selection of design works, demonstrating expertise, creativity, and the ability to solve diverse challenges.</p>
                </div>
                <div className="col-md-12 mb-4 gap-5 d-flex justify-content-center mt-3">
                    <a href="/" className="btn_1" onClick={handleAppDesignClick}>Figma Design</a>
                    <a href="/" className="btn_1" onClick={handleWebDesignClick}>Web Design</a>
                </div>
                {cardData.map((card, index) => (
                    (showAppDesign && index < 4) || (!showAppDesign && index >= 4) ?
                        <Card key={index} {...card} /> :
                        null
                ))}
            </div>
        </div>
    );
};

export default App;
