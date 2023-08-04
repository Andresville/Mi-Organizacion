import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';
import Equipos from './componentes/Equipos/Equipos';
import Footer from './componentes/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([... colaboradores, colaborador])
  }

  const equipos = [
    {
      nombreEquipo : "Programación",
      colorPrimario : "#57C278",
      colorSecundario : "#D9F7E9"
    },
    {
      nombreEquipo : "Front End",
      colorPrimario : "#82CFFA",
      colorSecundario : "#E8F8FF"
    },
    {
      nombreEquipo : "Data Science",
      colorPrimario : "#A6D157",
      colorSecundario : "#F0F8E2"
    },
    {
      nombreEquipo : "Devops",
      colorPrimario : "#E06B69",
      colorSecundario : "#FDE7E8"
    },
    {
      nombreEquipo : "UX y Diseño",
      colorPrimario : "#DB6EBF",
      colorSecundario : "#FAE9F5"
    },
    {
      nombreEquipo : "Móvil",
      colorPrimario : "#FFBA05",
      colorSecundario : "#FFF5D9"
    },
    {
      nombreEquipo : "Innovación y Gestión",
      colorPrimario : "#FF8A29",
      colorSecundario : "#FFEEDF"
    }
  ]

  //Ternario --> condicion ?seMuestra :noSeMuestra otra forma es poner condicion && seMuestra
  //<></> es lo mismo que poner un div vacio o <div></div>

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario registrarColaborador={registrarColaborador}/> : <></>}
      <MiOrganizacion cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo)=>{
        return<Equipos 
          datos={equipo} 
          key={equipo.nombreEquipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.nombreEquipo)}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
