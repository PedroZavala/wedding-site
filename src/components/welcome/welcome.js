import './welcome.css'
import Countdown from '../countdown/countdown'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const RSVPButton = styled(Button)(() => ({
    color: '#ffffff',
    fontSize: '3vh',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 'calc(100px + 10vh)',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000',
    },
  }));

function Welcome() {
    const backgroundImgSize= window.outerWidth <= 500 ? 'cover' : 'cover';

    return (
        <div className='intro-root'>
            <h1 className='intro-text intro-text-title'>Zavala Wedding</h1>
            <p className='intro-text intro-text-date'>September 10, 2022</p>
            <RSVPButton variant="contained">RSVP</RSVPButton>
            <Countdown/>
        </div>
    );
}

export default Welcome;