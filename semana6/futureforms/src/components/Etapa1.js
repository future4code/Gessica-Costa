import React from 'react'
import { Etapa2 } from './Etapa2'
import { PerguntaAberta } from './PerguntaAberta'
import { PerguntaFechada } from './PerguntaFechada'

export class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 1 - Dados gerais</h3>
                <form>
                    <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                    <input />
                    <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                    <input />
                    <PerguntaAberta pergunta={"3. Qual seu email?"} />
                    <input />
                    <PerguntaFechada pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]} />
                </form>
            </div >
        )
    }
}