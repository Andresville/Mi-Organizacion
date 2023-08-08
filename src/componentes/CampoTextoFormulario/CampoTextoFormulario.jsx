import "./CampoTextoFormulario.css"

const CampoFormulario = (props) => {

    const {type = "text"} = props

    const manejarValor = (evento) =>{
        props.setValor(evento.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
         placeholder={props.placeholder} 
         required={props.required} 
         value={props.valor}
         onChange={manejarValor}
         type={type}
         />
    </div>
}

export default CampoFormulario