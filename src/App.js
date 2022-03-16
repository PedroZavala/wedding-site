import './App.css';
import Welcome from './components/welcome/welcome';
import Story from './components/story/story';
import Registries from './components/registries/registries';
import PicGrid from './components/picgrid/picgrid';
import Maps from './components/maps/maps'
import Timeline from './components/timeline/timeline';
import Menu from './components/menu/menu'

const picGrid1 = [
  '360-bridge.jpg',
  '8-anniv.jpg',
  'atx-luvu.jpg',
  'graf-park.jpg',
  'jaki-15.jpg',
  'market-square.jpg',
  'mustache.jpg',
  'p-bday.jpg',
  'ring-eng.jpg'
  // 'sa-river.jpg',
  // 'uh-fnt.png',
  // 'valentines.jpg',
];

const App = () => {
  return (
    <>
      <div className='main-root'>
        <Menu/>
        <Welcome/>
        <div className='content-section-1'>
          <Story/>
          <Registries/>
          <PicGrid pictures={picGrid1}/>
        </div>
        {/* See backgroundShift component for parallel scrolling
        effects when disabling background color in div box */}
        <div className='content-section-2'>
          <Timeline/>
        </div>
        <div className='content-section-3'>
          <Maps/>
        </div>
      </div>
    </>
  );
}

export default App;
