import './maps.css'

const appleMapsUrl = 'https://maps.apple.com/?address=33301%20Old%20Hempstead%20Rd,%20Magnolia,%20TX%20%2077355,%20United%20States&auid=13776357865582839921&ll=30.213102,-95.779483&lsp=9902&q=THE%20SPRINGS%20Event%20Venue&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQAAoECFIQAwoECFUQDgoECFkQAQoFCKQBEAESJClqSg2qZTU+QDFiwdYeOPJXwDlm9Vhisjc+QEGq+QfOjfFXwA%3D%3D&t=h';
const googleMapsUrl = 'https://goo.gl/maps/F4KXinbQFLFAncEJ9';
const wazeMapsUrl = 'https://waze.com/ul/h9v7gukpec';

function Maps() {
    return (
        <div className='maps-root'>
            <a href={googleMapsUrl}>Google</a>
            <a href={appleMapsUrl}>Apple</a>
            <a href={wazeMapsUrl}>Waze</a>
        </div>
    );
}

export default Maps;