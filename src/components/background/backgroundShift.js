import './backgroundShift.css'
import React, {useState, useEffect} from 'react'
import Slideshow from '../slideshow/slideshow'

const BackgroundShift = () => {
  const scrollYBreak = 1100;
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollYPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const contentEnable = {
    zIndex: `0`,
    opacity: '100'
  };

  const contentDisable = {
    zIndex: `-1`,
    opacity: '0'
  };

  // Updating background image z index for parallex scrolling effect
  return (
    <div className='background-img-wrap' style={{zIndex: `-1`}}>
      <div className='background-img-content'
        style={scrollYPosition < scrollYBreak ? contentEnable : contentDisable}>
        <Slideshow/>
      </div>
      <div className='background-img-content'
        style={scrollYPosition < scrollYBreak ? contentDisable : contentEnable}>
        <img className='background-img' src='/images/slideshow/img4.jpg'></img>
      </div>
    </div>
  );
}

export default BackgroundShift;