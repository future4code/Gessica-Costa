import React from 'react'
import { PerguntaFechada } from './PerguntaFechada'
import { PerguntaAberta } from './PerguntaAberta'

export class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 3 - Informações gerais de ensino</h3>
                <PerguntaAberta pergunta={"1. Por que você não terminou um curso de graduação?"} />
                <input />
                <PerguntaFechada pergunta={"2. Você fez algum curso complementar?"} 
                opcoes={["Curso Técnico", "Curso de Inglês", "Curso de Técnico e Inglês", "Não fiz curso complementar"]}
                />
            </div>
        )
    }
}