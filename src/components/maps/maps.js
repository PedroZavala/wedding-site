import './maps.css'

const appleMapsUrl = 'https://maps.apple.com/?address=33301%20Old%20Hempstead%20Rd,%20Magnolia,%20TX%20%2077355,%20United%20States&auid=13776357865582839921&ll=30.213102,-95.779483&lsp=9902&q=THE%20SPRINGS%20Event%20Venue&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQAAoECFIQAwoECFUQDgoECFkQAQoFCKQBEAESJClqSg2qZTU+QDFiwdYeOPJXwDlm9Vhisjc+QEGq+QfOjfFXwA%3D%3D&t=h';
const appleMapsLogo = 'https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/50/ed/e0/50ede0aa-b285-443b-7f4c-14f91b039bab/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp';

const googleMapsUrl = 'https://goo.gl/maps/SgdxP4hxPhpoMg987';
const googleMapsLogo = 'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/9b/d7/95/9bd795cc-041f-7311-e879-85ed67df75db/logo_maps_ios_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp';

const wazeMapsUrl = 'https://waze.com/ul/h9v7gukpec';
const wazeMapsLogo = 'https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/d7/61/3bd76166-6403-0ffd-dbf8-dfbc4967485e/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp';

const Maps = () => {
    return (
        <div className='maps-root' id='venue'>
            <p className='maps-title gold-underline'>Venue</p>
            <div className='maps-content'>
                <div className='maps-icons-wrap'>
                    <div>
                        <a href={googleMapsUrl}><img className='maps-icon grow' src={googleMapsLogo} loading='lazy'></img></a>
                        <a href={appleMapsUrl}><img className='maps-icon grow' src={appleMapsLogo} loading='lazy'></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maps;