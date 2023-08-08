import { useState } from "react"
import "./Formulario.css"
import CampoTextoFormulario from "../CampoTextoFormulario/CampoTextoFormulario"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) =>{
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [nombreEquipo, setnombreEquipo] = useState("")
    const [color, setColor] = useState ("")

    const manejoEnvio = (evento) =>{
        evento.preventDefault()
        const datosAEnviar = {
            nombre : nombre,
            puesto : puesto,
            foto : foto,
            equipo : equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) =>{
        evento.preventDefault()
        const datosAEnviar = {
            nombreEquipo : nombreEquipo,
            colorPrimario : color
        }
        props.crearEquipo(datosAEnviar)
    }
    
    return <section className="formulario">
        <form onSubmit={manejoEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTextoFormulario 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <CampoTextoFormulario 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                setValor={setPuesto}
            />
            <CampoTextoFormulario 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                setValor={setFoto}
            />
            <ListaOpciones 
                valor = {equipo} 
                setValor = {setEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTextoFormulario 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={nombreEquipo} 
                setValor={setnombreEquipo}
            />
            <CampoTextoFormulario 
                titulo="Color" 
                placeholder="Ingresar Color" 
                required
                valor={color} 
                setValor={setColor}
                type ="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario