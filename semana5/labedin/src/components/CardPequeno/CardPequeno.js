import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return(
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <label id="chave">{ props.nome }</label>
                <label>{ props.valor }</label>
            </div>
        </div>
    )
}

export default CardPequeno;