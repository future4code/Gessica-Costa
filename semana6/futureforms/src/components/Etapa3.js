import React from 'react'

export class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3 - Informações sobre quem não cursou ensino superior ou está cursando</h1>
                <p>Por que você não terminou um curso de graduação?</p>
                <input />
                <p>Você fez algum curso complementar?</p>
                <select id="cursoComplementar">
                    <option value="CursoTecnico">Curso Técnico</option>
                    <option value="CursoIngles">Curso de Inglês</option>
                    <option value="TecnicoEIngles">Curso de Técnico e Inglês</option>
                    <option value="NãoFezCursoComplementar">Não fiz cruso complementar</option>
                </select>
            </div>
        )
    }
}