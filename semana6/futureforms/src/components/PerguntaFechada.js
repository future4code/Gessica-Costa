import React from 'react'

export class PerguntaFechada extends React.Component {
    render() {
        let opcoes = this.props.opcoes

        const selecao = opcoes.map((op, index) => {
            return <option id={index} key={index} value={index}>{op}</option>
        })
console.log("selecao", selecao.id)
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <div><select>{selecao}</select></div>
            </div>
        )
    }
}