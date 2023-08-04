import "./Equipos.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipos = (props) =>{
    const {colaboradores} = props

    return <>
        {colaboradores.length > 0 ?
            <section className="equipos" style={{backgroundColor:props.datos.colorSecundario}}>
            <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.nombreEquipo}</h3>
            <div className="colaboradores">
             {
                colaboradores.map((colaborador, index) =><Colaborador 
                    datos={colaborador} 
                    key={index}
                    colorPrimario={props.datos.colorPrimario}
                    />)
            }
            </div>
            </section>
            :<></>
    }</>
}

export default Equipos