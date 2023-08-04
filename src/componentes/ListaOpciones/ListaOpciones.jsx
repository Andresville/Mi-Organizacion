import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    //Metodo map -> arreglo.map((equipo, index)) ]=>{
    // return <option></option>
    //}

    const equipos =[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (evento) =>{
        props.setValor(evento.target.value)
    }

    //Cada componente debe llevar una key unica

    return <div className="lista-opciones"> 
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map( (equipo, index) => {
                return<option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones