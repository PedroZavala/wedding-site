import './backgroundShift.css'
import Slideshow from '../slideshow/slideshow'
import { scrollHook_getYPosition } from '../util/scrollHooks'

const BackgroundShift = () => {
  const scrollYBreak = 1100;

  const contentEnable = {
    zIndex: `0`,
    opacity: '1'
  };

  const contentDisable = {
    zIndex: `-1`,
    opacity: '0'
  };

  // Updating background image z index for parallex scrolling effect
  return (
    <div className='background-img-wrap' style={{zIndex: `-1`}}>
      <div className='background-img-content'
        style={scrollHook_getYPosition() < scrollYBreak ? contentEnable : contentDisable}>
        <Slideshow/>
      </div>
      <div className='background-img-content'
        style={scrollHook_getYPosition() < scrollYBreak ? contentDisable : contentEnable}>
        <img className='background-img' src='/images/wedding-arrow.jpeg'></img>
      </div>
    </div>
  );
}

export default BackgroundShift;