import './registries.css'
import { scrollHook_getDynamicMarginYPosition, scrollHook_getYPerBreakPerc } from '../util/scrollHooks';

const targetUrl = 'https://target.com';
const targetLogo = 'https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/05/ef/6e/05ef6edc-bebf-73ab-04e7-a2993e365509/AppIconShiny-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp';

const amazonUrl = 'https://www.amazon.com/wedding/pedro-zavala-ashley-rodriguez--september-2022/registry/2B6J0WWRXKGOK';
const amazonLogo = 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/0d/cf/e7/0dcfe7a0-0343-4a1d-5294-617ddf488340/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/246x0w.webp'

const Registries = () => {
    const scrollYBreak = 1500;
    const titleHiddenTopMargin = 300;

    const titleStyle = {
        left: `${scrollHook_getDynamicMarginYPosition(scrollYBreak, titleHiddenTopMargin)}px`,
        opacity: `${scrollHook_getYPerBreakPerc(scrollYBreak)}%`
    };

    return (
        <div className='registries-root' id='registry'>
            <div className='registries-title-div gold-underline'>
                <p className='registries-title' style={titleStyle}>Gift Registry</p>
            </div>
            <div className='registries-center'>
                <div>
                    <a href={amazonUrl}><img className='registries-icon grow' src={amazonLogo}></img></a>
                    <a href={targetUrl}><img className='registries-icon grow' src={targetLogo}></img></a>
                </div>
            </div>
        </div>
    );
}

export default Registries;