import './App.css';
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import Footer from './componet/Footer';
import Header from './componet/Header';
import Hero from './componet/Hero';
import Myproject from './componet/Myproject';

function App() {


  const [animationData, setAnimationData] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [animationIsPlaying, setAnimationIsPlaying] = useState(true);

  useEffect(() => {
    const updateReadProgress = () => {
      const blogContent = document.querySelector(".blog-content");
      const readProgress = document.getElementById("read-progress");
      const windowHeight = window.innerHeight;
      const scrollHeight = blogContent.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const percentScrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
      readProgress.style.width = percentScrolled + "%";
    };

    window.addEventListener("scroll", updateReadProgress);

    return () => {
      window.removeEventListener("scroll", updateReadProgress);
    };
  }, []);



  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('loading.json');
        const animationData = await response.json();
        setAnimationData(animationData);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisloading(false)
    }, 1000);
  }, [])
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const onAnimationComplete = () => {
    setAnimationIsPlaying(false);
  };

  return (
    <><div className="blog-content">
      <div className="app-container">
        {isloading ? (
          <div className="loading-animation-container">
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              className="loading-animation"
              eventListeners={[{ eventName: 'complete', callback: onAnimationComplete }]}
            />
          </div>
        ) : (
          <div className="content">
            <Header />
            <Hero />
            <Myproject />
            <Footer />
          </div>
        )}
      </div>
    </div>
      <div
        id="read-progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: "6px",
          borderRadius:"0 0 10px 10px",
          backgroundColor: "#fff",
          zIndex: 9999,
          transition: "width 0.3s ease",
        }}
      ></div></>
  );
}

export default App;
