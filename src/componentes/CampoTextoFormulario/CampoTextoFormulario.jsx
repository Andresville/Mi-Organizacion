import "./CampoTextoFormulario.css"

const CampoTextoFormulario = (props) => {
    
    const manejarValor = (evento) =>{
        props.setValor(evento.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
         placeholder={props.placeholder} 
         required={props.required} 
         value={props.valor}
         onChange={manejarValor}
         />
    </div>
}

export default CampoTextoFormulario