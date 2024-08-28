import React from 'react'
import './Navegador.css'


const Navegador = () => {

  const ClickUbicacion = () => {
    window.open('https://maps.app.goo.gl/NKXxqnjGQE4WD76o9', '_blank');
  };
  
  const ClickConfirmacion = () => {
    window.open('https://api.whatsapp.com/send?phone=+59167500224&text=Hola!!%20Quiero%20confirmarte%F0%9F%A5%B3%20mi%20asistencia%20el%2007%20de%20septiembre%20a%20horas%2018:00%F0%9F%99%8C', '_blank');
  };

  return (
    <nav className='navGeneral'>
        <button className = 'texNav'>Fecha</button>        
        <button onClick={ClickUbicacion} className = 'texNav'>Lugar y Hora</button>        
        <button onClick={ClickConfirmacion} className = 'texNav'>Confirmar Asistencia</button>        
        <button className = 'texNav'>Como llegar</button>        
        <button className = 'texNav'>¿Que es "De traje"? </button>        
        {/* <h1 className = 'encabezado' > Lugar y hora</h1> */}
    </nav>

  )
}

export default Navegador