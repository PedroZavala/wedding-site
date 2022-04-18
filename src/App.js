import './App.css';
import Welcome from './components/welcome/welcome';
import Story from './components/story/story';
import Registries from './components/registries/registries';
import PicGrid from './components/picgrid/picgrid';
import Maps from './components/maps/maps'
import Timeline from './components/timeline/timeline';
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'

const picGrid1 = [
  'skyline-up.jpg',
  'rose-bushes-2.jpg',
  'tracks-close.jpg',
  'vines.jpg',
  'square-look.jpg',
  'bridge-red.jpg'
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
          {/* <PicGrid pictures={picGrid2}/> */}
          <Maps/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
