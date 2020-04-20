import React from 'react'
import { Etapa2 } from './Etapa2'

export class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 1 - Dados gerais</h1>
                <form>
                    <p>1. Qual o seu nome?</p>
                    <input/>
                    <p>1. Qual sua idade?</p>
                    <input/>
                    <p>1. Qual seu email?</p>
                    <input/>
                    <p>1. Qual a sua escolaridade?</p>
                    <select id="escolaridade">
                        <option value="EnsinoMedioIncompleto">Ensino Médio Incompleto</option>
                        <option value="EnsinoMedioCompleto">Ensino Médio Completo</option>
                        <option value="EnsinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                        <option value="EnsinoSuperiorCompleto">Ensino Superior Completo</option>
                    </select>
                    <br />
                    <br />
                    <button onClick = {this.props.irParaEtapa2}>Próxima etapa</button>
                </form>
            </div >
        )
    }
}