import React, {useState} from 'react'
import './backgroundShift.css'

const LogoAnimated = () => {
    const [logoFadeOut, setLogoFadeOut] = useState(1);

    setTimeout(() => {
      setLogoFadeOut(-2);
    }, 2500)

    return (
        <div style={{zIndex: '-2'}}>
            <div className='background-img-wrap logo-intro-wrap' style={{zIndex: logoFadeOut}}>
                <img className='logo-intro-img' src='/logo.png'></img>
            </div>
        </div>
    );
}

export default LogoAnimated;