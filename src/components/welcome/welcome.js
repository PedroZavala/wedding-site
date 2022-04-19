import './welcome.css'
import Ticker from '../ticker/ticker'
import Rsvp from './rsvp/rsvp';
import BackgroundShift from '../background/backgroundShift';
import LogoAnimated from '../background/logoAnimated';

const Welcome = () => {
    return (
        <div className='welcome-root' id='welcome'>
          <BackgroundShift/>
          <LogoAnimated/>
          <div className='welcome-text-box'>
              <p className='welcome-text welcome-text-title'>Ashley</p>
              <p className='welcome-text welcome-text-split'>and</p>
              <p className='welcome-text welcome-text-title'>Pedro</p>
              <p className='welcome-text welcome-text-date'>Sept • 10 • 2022</p>
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