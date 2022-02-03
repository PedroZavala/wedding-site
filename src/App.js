import './App.css';
import Welcome from './components/welcome/welcome';
import Registries from './components/registries/registries';
import Slideshow from './components/slideshow/slideshow';
import Maps from './components/maps/maps'

const App = () => {
  return (
    <>
      <div className='main-root'>
        <Welcome/>
        <div className='content-root'>
          <Registries/>
          <Slideshow/>
          <Maps/>
        </div>
      </div>
    </>
  );
}

export default App;
