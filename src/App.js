import { useState } from 'react';
import { v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrganizacion from './componentes/MiOrganizacion/MiOrganizacion';
import Equipos from './componentes/Equipos/Equipos';
import Footer from './componentes/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instrutor" 
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora" 
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instrutor" 
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/chistianpva.png",
    nombre: "Chistian Velasco",
    puesto: "Head e Instrutor" 
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack" 
  }
])

  const [equipos, actualizarEquipos] = useState([
    {
      id:uuid(),
      nombreEquipo : "Programación",
      colorPrimario : "#57C278",
      colorSecundario : "#D9F7E9"
    },
    {
      id:uuid(),
      nombreEquipo : "Front End",
      colorPrimario : "#82CFFA",
      colorSecundario : "#E8F8FF"
    },
    {
      id:uuid(),
      nombreEquipo : "Data Science",
      colorPrimario : "#A6D157",
      colorSecundario : "#F0F8E2"
    },
    {
      id:uuid(),
      nombreEquipo : "Devops",
      colorPrimario : "#E06B69",
      colorSecundario : "#FDE7E8"
    },
    {
      id:uuid(),
      nombreEquipo : "UX y Diseño",
      colorPrimario : "#DB6EBF",
      colorSecundario : "#FAE9F5"
    },
    {
      id:uuid(),
      nombreEquipo : "Móvil",
      colorPrimario : "#FFBA05",
      colorSecundario : "#FFF5D9"
    },
    {
      id:uuid(),
      nombreEquipo : "Innovación y Gestión",
      colorPrimario : "#FF8A29",
      colorSecundario : "#FFEEDF"
    }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([... colaboradores, colaborador])
  }

  //Eliminar Colaborador

  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) =>{
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores)
  }

  //Cambiar Color de equipo

  const cambiarColor = (color, id)=>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipos

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //Ternario --> condicion ?seMuestra :noSeMuestra otra forma es poner condicion && seMuestra
  //<></> es lo mismo que poner un div vacio o <div></div>

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario 
        registrarColaborador={registrarColaborador}
        crearEquipo ={crearEquipo}
        /> : <></>}

      <MiOrganizacion cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo)=>{
        return<Equipos 
          datos={equipo} 
          key={equipo.nombreEquipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.nombreEquipo)}
          eliminarColaborador={eliminarColaborador}
          cambiarColor = {cambiarColor}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
