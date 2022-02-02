import './welcome.css'
import Ticker from '../ticker/ticker'
import Rsvp from './rsvp/rsvp';
import image from '../../assets/images/welcome-image.jpeg'

function Welcome() {
    return (
        <div className='welcome-root'>
          <div className="background-wrap" style={{backgroundImage: `url(${image})`}}></div>
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