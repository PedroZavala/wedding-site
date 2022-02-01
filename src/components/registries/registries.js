import './registries.css'

const r1Url = 'https://google.com';
const r1Logo = 'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/d7/61/3bd76166-6403-0ffd-dbf8-dfbc4967485e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp';

function Registries() {
    return (
        <div className='registries-root'>
            <p className='registries-title'>Our Registries</p>
            <div className='registries-center'>
                <div>
                    <a href={"https://target.com"}><img className='registries-icon' src={r1Logo}></img></a>
                    <a href={r1Url}><img className='registries-icon' src={r1Logo}></img></a>
                </div>
            </div>
        </div>
    );  
}

export default Registries;