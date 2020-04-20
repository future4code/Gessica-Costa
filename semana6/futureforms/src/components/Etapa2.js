import React from 'react'
import { PerguntaAberta } from './PerguntaAberta'

export class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 2 - Informações do Ensino Superior</h3>
                <PerguntaAberta pergunta={"1. Qual o curso?"} />
                <input />
                <PerguntaAberta pergunta={"2. Qual a unidade de ensino?"} />
                <input />
            </div>
        )
    }
}