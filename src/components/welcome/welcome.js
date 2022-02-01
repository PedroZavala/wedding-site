import './welcome.css'
import Ticker from '../ticker/ticker'
import Rsvp from './rsvp/rsvp';

function Welcome() {
    return (
        <div className='welcome-root' style={{backgroundImage: 'url(/images/welcome-image.jpeg)'}}>
          <div className='welcome-text-box'>
              <h1 className='welcome-text welcome-text-title'>Zavala Wedding</h1>
              <p className='welcome-text welcome-text-date'>September 10, 2022</p>              
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