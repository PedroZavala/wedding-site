import './ticker.css'
import Countdown from 'react-countdown';

const weddingDate = '2022-09-10T18:00:00'

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
        <div className='ticker-text ticker-text-ticking'><p>Days</p><p>{days}</p></div>
        <div className='ticker-text ticker-text-ticking'><p>Hours</p><p>{hours}</p></div>
        <div className='ticker-text ticker-text-ticking'><p>Minutes</p><p>{minutes}</p></div>
        <div className='ticker-text ticker-text-ticking'><p>Seconds</p><p>{seconds}</p></div>        
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