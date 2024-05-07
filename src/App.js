import './App.css';
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import Footer from './componet/Footer';
import Header from './componet/Header';
import Hero from './componet/Hero';
import Myproject from './componet/Myproject';

function App() {
  const [animationData, setAnimationData] = useState(null);
  const [animationIsPlaying, setAnimationIsPlaying] = useState(true);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('loading.json'); // Adjust the path if needed
        const animationData = await response.json();
        setAnimationData(animationData);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchAnimationData();
  }, []);

  // Customize Lottie options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // Function to handle animation completion
  const onAnimationComplete = () => {
    setAnimationIsPlaying(false);
  };

  return (
    <div className="app-container">
      {animationData && animationIsPlaying ? (
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
  );
}

export default App;
