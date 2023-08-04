//import { useState } from "react"
import "./MiOrganizacion.css"

const MiOrganizacion = (props) => {
    //Estados - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
    //    console.log("Mostrar/Ocultar")
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="/img/add.png" alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrganizacion