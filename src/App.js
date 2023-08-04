import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  //Ternario --> condicion ?seMuestra :noSeMuestra otra forma es poner condicion && seMuestra
  //<></> es lo mismo que poner un div vacio o <div></div>

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <></>} 
      <MiOrganizacion cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
