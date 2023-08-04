import { useState } from "react"
import "./Formulario.css"
import CampoTextoFormulario from "../CampoTextoFormulario/CampoTextoFormulario"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () =>{
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")

    const manejoEnvio = (evento) =>{
        evento.preventDefault()
        const datosAEnviar = {
            nombre : nombre,
            puesto : puesto,
            foto : foto
        }
        console.log(datosAEnviar)
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
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario