import './ticker.css'
import Countdown from 'react-countdown';

const weddingDate = '2022-09-10T18:00:00'

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>It' Time!</span>;
  } else {
    // Render a countdown
    return <span style={{fontSize: '20px'}}>{days} {hours} {minutes} {seconds}</span>;
  }
};

const Ticker = () => {
    return (
        <div className='countdown-root'>
            <Countdown className='countdown-content' date={weddingDate} renderer={renderer}/>
        </div>
    );
}
 
export default Ticker;