import './App.css';
import Welcome from './components/welcome/welcome';
import Registries from './components/registries/registries';
import Slideshow from './components/slideshow/slideshow';
import Maps from './components/maps/maps'

function App() {
  return (
    <>
      <div className='content-root'>
        <Welcome/>
        <Registries/>
        <Slideshow/>
        <Maps/>
      </div>
    </>
  );
}

export default App;
