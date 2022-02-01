import './welcome.css'
import Countdown from '../countdown/countdown'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const RSVPButton = styled(Button)(() => ({
    color: '#ffffff',
    fontSize: '3vh',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000',
    },
  }));

function Welcome() {
    return (
        <div className='welcome-root'>
          <div className='welcome-text-box'>
              <h1 className='welcome-text welcome-text-title'>Zavala Wedding</h1>
              <p className='welcome-text welcome-text-date'>September 10, 2022</p>              
          </div>
          <div className='welcome-rsvp-box'>
            <RSVPButton variant="contained">RSVP</RSVPButton>
          </div>
          <div className='welcome-countdown-box'>
            <Countdown/>
          </div>
        </div>
    );
}

export default Welcome;