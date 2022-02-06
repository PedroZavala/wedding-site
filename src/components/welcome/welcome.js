import './welcome.css'
import Ticker from '../ticker/ticker'
import Rsvp from './rsvp/rsvp';
import image from '../../assets/images/welcome-image.jpeg'
import Slideshow from '../slideshow/slideshow';
import React, {useState, useEffect} from 'react'


const BackgroundImageShift = () => {
  const scrollYBreak = 1100;
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollYPosition(position);
      console.log(position);
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
        <Slideshow />
      </div>
      <div className='background-img-content'
        style={scrollYPosition < scrollYBreak ? contentDisable : contentEnable}>
        <img className='background-img' src='/images/slideshow/img1.jpg'></img>
      </div>
    </div>
  );
}

const Welcome = () => {
    return (
        <div className='welcome-root'>
          <BackgroundImageShift/>
          <div className='welcome-text-box'>
              <p className='welcome-text welcome-text-title'>Ashley</p>
              <p className='welcome-text welcome-text-split'>and</p>
              <p className='welcome-text welcome-text-title'>Pedro</p>
              <p className='welcome-text welcome-text-date'>09.10.22</p>
          </div>
          <div className='welcome-rsvp-box'>
            <Rsvp/>
          </div>
          <div className='welcome-countdown-box'>
            <Ticker/>
          </div>
        </div>
    );
}

export default Welcome;