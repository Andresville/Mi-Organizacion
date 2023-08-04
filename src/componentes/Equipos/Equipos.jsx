import "./Equipos.css"

const Equipos = (props) =>{
    return <section className="equipos" style={{backgroundColor:props.datos.colorSecundario}}>
        <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.nombreEquipo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipos