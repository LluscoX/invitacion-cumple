import VideoInvitacion from './components/VideoInvitacion.jsx';
import imagen1 from './assets/img1.png';
import './App.css';
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal.jsx';
import Navegador from './components/Navegador/Navegador.jsx';
import Fecha from './components/Fecha/Fecha.jsx';

function App() {
 
  return (
    <div>
      <Navegador/>
      <TituloPrincipal/>
      <Fecha/>
      {/* <h2 className='textdetraje' >Fiesta De Traje</h2> */}
      {/* <VideoInvitacion/> */}

    </div>
    
    )
}

export default App
