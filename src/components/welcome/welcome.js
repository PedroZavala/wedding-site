import './welcome.css'
import Ticker from '../ticker/ticker'
import Rsvp from './rsvp/rsvp';
import BackgroundShift from '../background/backgroundShift';
import LogoAnimated from '../background/logoAnimated';

const Welcome = () => {
    return (
        <div className='welcome-root'>
          <BackgroundShift/>
          <LogoAnimated/>
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