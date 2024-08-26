import VideoInvitacion from './components/VideoInvitacion.jsx';
import imagen1 from './assets/img1.png';
import './App.css';

function App() {
 
  return (
    <div>
      <img className='img1' src={imagen1} alt="" />
      <VideoInvitacion/>
      <h2 className='textdetraje' >De traje</h2>

    </div>
    
    )
}

export default App
