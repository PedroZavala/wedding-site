import './ticker.css'
import Countdown from 'react-countdown';

// Github server in EST, adjust for CST
const weddingDate = '2022-09-10T19:00:00'

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <div className='ticker-content'>
        <div className='ticker-text ticker-text-done'><p>It's Time!!</p></div>
      </div>
    );
  } else {
    // Render a countdown
    return (
      <div className='ticker-content'>
        <div className='ticker-text'>
          <p className='ticker-text-ticking-header'>Days</p>
          <p className='ticker-text-ticking-num'>{days}</p>
        </div>
        <div className='ticker-text'>
          <p className='ticker-text-ticking-header'>Hours</p>
          <p className='ticker-text-ticking-num'>{hours}</p>
        </div>
        <div className='ticker-text'>
          <p className='ticker-text-ticking-header'>Minutes</p>
          <p className='ticker-text-ticking-num'>{minutes}</p>
        </div>
        <div className='ticker-text'>
          <p className='ticker-text-ticking-header'>Seconds</p>
          <p className='ticker-text-ticking-num'>{seconds}</p>
        </div>
      </div>
    );
  }
};

const Ticker = () => {
    return (
        <div className='ticker-root'>
          <Countdown date={weddingDate} renderer={renderer}/>
        </div>
    );
}

export default Ticker;