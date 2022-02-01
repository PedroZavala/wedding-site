import './welcome.css'
import Countdown from '../countdown/countdown'
import Rsvp from './rsvp/rsvp';

function Welcome() {
    return (
        <div className='welcome-root'>
          <div className='welcome-text-box'>
              <h1 className='welcome-text welcome-text-title'>Zavala Wedding</h1>
              <p className='welcome-text welcome-text-date'>September 10, 2022</p>              
          </div>
          <div className='welcome-rsvp-box'>
            <Rsvp/>
          </div>
          <div className='welcome-countdown-box'>
            <Countdown/>
          </div>
        </div>
    );
}

export default Welcome;