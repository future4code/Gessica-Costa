import React from 'react'

export class PerguntaFechada extends React.Component {
    render() {
        let opcoes = this.props.opcoes

        const selecao = opcoes.map((op, index) => {
            return <option key={index} value={index}>{op}</option>
        })

console.log(selecao[0].key)
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <div><select>{selecao}</select></div>
            </div>
        )
    }
}