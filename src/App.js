import './App.css';
import Welcome from './components/welcome/welcome';
import Story from './components/story/story';
import Registries from './components/registries/registries';
import PicGrid from './components/picgrid/picgrid';
import Maps from './components/maps/maps'

const App = () => {
  return (
    <>
      <div className='main-root'>
        <Welcome/>
        <div className='content-root'>
          <Story/>
          <PicGrid/>
          <Registries/>
          <Maps/>
        </div>
      </div>
    </>
  );
}

export default App;
