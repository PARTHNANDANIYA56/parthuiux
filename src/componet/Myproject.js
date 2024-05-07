import React, { useState } from 'react';

function MyProject() {
    const [showMore, setShowMore] = useState(false);
    const projects = [
        {
            id: 1,
            title: 'Pass Code Lock',
            imageSrc: 'image/passcodelockscreen.png',
            description: 'Introducing a cutting-edge passcode lock app with advanced security options including face recognition, pattern, time-based, and gesture locks. Experience seamless protection tailored to your preferences for safeguarding your digital assets with ease and precision.',
            link: 'https://www.figma.com/file/Hu2iNB7JIoVKzTA3iCSbn6/Untitled?type=design&node-id=0%3A1&mode=design&t=6cFM5Cw5cA3AAnZI-1',
        },
        {
            id: 2,
            title: 'Good Night GIF',
            imageSrc: 'image/Good Night GIF.png',
            description: "Designing a comprehensive Good Night GIF app featuring a diverse range of functions: GIFs, wallpapers, images, quotes, and personal creation capabilities. Access a vast repository of soothing content or craft your own, ensuring every user can bid goodnight with warmth",
            link: 'https://www.figma.com/file/0sjFUoPsDL3qpeBl2YWI1B/Good-Night-GIF?type=design&node-id=0%3A1&mode=design&t=nZQmal2gDEZrrLcu-1',
        },
        {
            id: 3,
            title: 'Love GIF',
            imageSrc: 'image/lovegif.png',
            description: "Designing a comprehensive Love GIF app featuring a diverse range of functions: GIFs, wallpapers, images, quotes, and personal creation capabilities. Access a vast repository of soothing content or craft your own, ensuring every user can bid goodnight with warmth",
            link: 'https://www.figma.com/file/TIdjbUsIUby0PlYDix7S41/Untitled?type=design&mode=design&t=2vardNhYtzvgLor5-1',
        },
        {
            id: 4,
            title: 'Nature Photo Frame',
            imageSrc: 'image/Nature Photo Frame.png',
            description: "Introducing a Nature Photo Frame app with versatile features: customizable frames, extensive photo collection, easy rating system, and adjustable settings. Immerse yourself in the beauty of nature with personalized frames or explore curated collections, while offering feedback and fine-tuning preferences effortlessly.",
            link: 'https://www.figma.com/file/w7A5m8OabxQdz6wF7hLL2g/Nature-Photo-Frame?type=design&node-id=0%3A1&mode=design&t=2vardNhYtzvgLor5-1',
        },
        {
            id: 5,
            title: 'FoodNinja',
            imageSrc: 'image/FoodNinja.png',
            description: "Introducing FoodNinja, the ultimate food delivery app with powerful functions: seamless location detection, one-tap call integration, real-time order tracking, and lightning-fast delivery. Navigate through hunger effortlessly, track your order on the go, and experience swift, efficient service for your culinary cravings.",
            link: 'https://www.figma.com/file/zab5GCwF5aa36COAdUIujD/por-.1?type=design&node-id=0%3A1&mode=design&t=b3ztqOSc2VydqP8j-1',
        },
        {
            id: 6,
            title: 'Shradhanjali Card Maker',
            imageSrc: 'image/ShradhanjaliCardMaker.png',
            description: "Presenting Shradhanjali Card Maker: an intuitive app for crafting heartfelt condolence cards. With its easy-to-use interface, users can create personalized tributes with ease. Save drafts for future editing and create meaningful expressions of sympathy. Honor loved ones with grace and compassion through custom-designed cards.",
            link: 'https://www.figma.com/file/F6c21GyFI37em8bIxrFjgs/Shradhanjali-Card-Maker?type=design&node-id=30-2&mode=design&t=Ws4xXpNlaYp0WoJd-0',
        },
        {
            id: 7,
            title: 'Book Dual Photo Frame',
            imageSrc: 'image/BookDualPhotoFrame.png',
            description: "Introducing Book Dual Photo Frame, a creative app allowing users to combine two photos into captivating dual frames. Capture memories in a unique way with customizable layouts. Share your creations with friends and family, immersing them in the beauty of combined imagery. Unlock boundless creativity today.",
            link: 'https://www.figma.com/file/FyyRX3XBUn9gCYbIbDzdaV/Book-Dual-Photo-Frame?type=design&node-id=0-1&mode=design&t=Ws4xXpNlaYp0WoJd-0',
        },
        {
            id: 8,
            title: 'Status  Download',
            imageSrc: 'image/Statusdownload.png',
            description: "Meet StatusDownload, the ultimate tool for swiftly saving social media statuses. With its intuitive design, effortlessly download statuses from various platforms. Stay updated and keep your favorite moments at your fingertips – download and enjoy them offline, anytime, anywhere with ease.",
            link: 'https://www.figma.com/file/PoHRNkLQzA3chO8mf2ujvZ/Status--Download?type=design&node-id=0-1&mode=design&t=Ws4xXpNlaYp0WoJd-0',
        },
        {
            id: 9,
            title: 'Video Player',
            imageSrc: 'image/VideoPlayer.png',
            description: "Introducing the Video Player app: your go-to solution for seamless video playback. With support for all formats and an intuitive interface, effortlessly enjoy your favorite videos. From AVI to MP4, play any file with ease and convenience. Elevate your viewing experience with this user-friendly app.",
            link: 'https://www.figma.com/file/oh9VrHKfTImq69qXkah1P4/Video-Player?type=design&node-id=0-1&mode=design&t=LAPRwX5ltgRgIeaT-0',
        },
        {
            id: 10,
            title: 'Slow Motion Video Maker',
            imageSrc: 'image/SlowMotionVideoMaker.png',
            description: "Introducing SlowMotionVideoMaker, an innovative app designed to effortlessly create captivating slow-motion videos. With its user-friendly interface and powerful features, transform ordinary moments into extraordinary cinematic experiences. Customize video speeds, add effects, and unleash your creativity to produce stunning visuals that leave a lasting impression.",
            link: 'https://www.figma.com/file/8mWGbBPwJvaq60neFkWK6o/Slow-Motion-Video-Maker?type=design&node-id=0-1&mode=design&t=u6glcUjx4D3A52xp-0',
        },
    ];
    const handleSeeMoreClick = () => {
        setShowMore(true);
    };
    return (
        <>
            <section className="dark">
                <div className="container py-4 myproject_mein">
                    <div className=''>
                        <h1 className="h1 text-center" id="pageHeaderTitle">My Projects</h1>
                        <p className="w-50 text-center m-auto pb-4 project_contact">"My Projects" showcases a curated selection of design works, demonstrating expertise, creativity, and the ability to solve diverse challenges.</p>
                    </div>
                    {projects.map(project => (
                        <article key={project.id} className="postcard dark blue">
                            <a className="postcard__img_link" href="#">
                                <img className="postcard__img" src={project.imageSrc} alt="Project Image" />
                            </a>
                            <div className="postcard__text">
                                <h1 className="postcard__title blue"><a href="#">{project.title}</a></h1>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">{project.description}</div>
                                <ul className="postcard__tagbox">
                                    <li className="tag__item play blue">
                                        <a href={project.link} onClick={handleSeeMoreClick} target='_blank'><i className="fas fa-play mr-2"></i>See More</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
export default MyProject;
