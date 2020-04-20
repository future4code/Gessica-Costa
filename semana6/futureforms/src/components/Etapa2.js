import React from 'react'

export class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 2 - Informações do Ensino Superior</h1>
                <p>Qual o curso?</p>
                <input />
                <p>Qual a unidade de ensino?</p>
                <input />
                <br />
                <br />
                <button onClick={this.props.irParaEtapa3}>Próxima etapa</button>

            </div>
        )
    }
}