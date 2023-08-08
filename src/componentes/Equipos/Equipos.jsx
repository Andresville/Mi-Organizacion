import "./Equipos.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipos = (props) =>{
    const {colaboradores, eliminarColaborador, cambiarColor} = props

    return <>
        {colaboradores.length > 0 ?
            <section className="equipos" style={{backgroundColor:hexToRgba(props.datos.colorPrimario, 0.6)}}>
                <input 
                    type="color"
                    className="input-color"
                    value={props.datos.colorPrimario}
                    onChange={(evento)=>{cambiarColor(evento.target.value, props.datos.id)}}
                />
            <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.nombreEquipo}</h3>
            <div className="colaboradores">
             {
                colaboradores.map((colaborador, index) =><Colaborador 
                    datos={colaborador} 
                    key={index}
                    colorPrimario={hexToRgba(props.datos.colorPrimario, 0.6)}
                    eliminarColaborador={eliminarColaborador}
                    />)
            }
            </div>
            </section>
            :<></>
    }</>
}

export default Equipos