import React from 'react'
import './Mensagem.css'

function Mensagem(props) {
    return (
        <div className="mensagem-container">
            <h4>{props.mensagem}</h4>
        </div>
    )
}
export default Mensagem