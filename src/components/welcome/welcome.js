import './welcome.css'
import Countdown from '../countdown/countdown'

function Welcome() {
    return (
        <div className='intro-root'>
            <div className='intro-welcome'>
                <h1 className='intro-text-title'>Zavala Wedding</h1>
                <p className='intro-text-date'>September 10, 2022</p>
                <Countdown/>
            </div>
        </div>
    );
}

export default Welcome;