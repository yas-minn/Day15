/*import { useState, useEffect } from "react";
import StarryNight from "/starry-night/hero-small.jpg";
import Pearl from "/girl-with-pearl-earring/hero-large.jpg";
import Guernica from "/guernica/hero-small.jpg";
import Magdalene from "/penitent-magdalene/hero-small.jpg";
import VanGogh from "/van-gogh-self-portrait/hero-large.jpg";
import TheStorm from "/the-storm-on-the-sea-of-galilee/hero-small.jpg";
import TheNightCafe from "/the-night-cafe/hero-small.jpg";
import Lady from "/lady-with-an-ermine/hero-large.jpg";



const photos = [
    {  img: [StarryNight]},
    {  img: [Pearl]},
    {  img: [Guernica]},
    {  img: [Magdalene]},
    {  img: [VanGogh]},
    {  img: [TheStorm]},
    {  img: [TheNightCafe] },
    {  img: [Lady]},
]

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
      let intervalId;
      if (isPlaying) {
        intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 2000); // Change slide every 2 seconds
      }
      return () => clearInterval(intervalId); // Cleanup on unmount or when playing state changes
    }, [isPlaying]);
  
    const startSlideshow = () => {
      setIsPlaying(true);
    };
  
    return (
        <div>
        <h1>Photo Slideshow</h1>
        <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} style={{ width: '600px', height: '400px' }} />
        <div>
          <button onClick={startSlideshow} disabled={isPlaying}>
            Start Slideshow
          </button>
        </div>
      </div>
    );
    
  };
  
  export default Slideshow;*/
  