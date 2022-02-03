import './App.css';
import Welcome from './components/welcome/welcome';
import Story from './components/story/story';
import Registries from './components/registries/registries';
import Slideshow from './components/slideshow/slideshow';
import Maps from './components/maps/maps'

const App = () => {
  return (
    <>
      <div className='main-root'>
        <Welcome/>
        <div className='content-root'>
          <Story/>
          <Slideshow/>
          <Registries/>
          <Maps/>
        </div>
      </div>
    </>
  );
}

export default App;
