function idadeHistorica(
    ano: number,
    sigla: string
): string {
    if (sigla === 'AC') {
        if (ano <= preHistoria.ano && ano > idadeAntiga.ano) {
            return preHistoria.nome
        } else if (ano <= idadeAntiga.ano && ano > idadeMedia.ano) {
            return idadeAntiga.nome
        } else {
            return 'Valor incorreto do ano'
        }
    } else if (sigla === 'DC') {
        if (ano >= idadeMedia.ano && ano < idadeModerna.ano) {
            return idadeMedia.nome
        } else if (ano >= idadeModerna.ano && ano < idadeContemporanea.ano) {
            return idadeModerna.nome
        } else if (ano >= idadeContemporanea.ano) {
            return idadeContemporanea.nome
        } else {
            return 'Valor incorreto do ano'
        }
    } else {
        return 'Valor incorreto da sigla'
    }
}

enum idade2 {
    PreHistoria = 100000, //AC
    IdadeAntiga = 4000, //AC
    IdadeMedia = 476, //DC
    IdadeModerna = 1453, //DC
    IdadeContemporanea = 789 //DC
}
type idade = {
    nome: string,
    ano: number,
    sigla: string
}
const preHistoria: idade = {
    nome: 'Pré-História',
    ano: 100000,
    sigla: 'AC'
}
const idadeAntiga: idade = {
    nome: 'Idade Antiga',
    ano: 4000,
    sigla: 'AC'
}
const idadeMedia: idade = {
    nome: 'Idade Média',
    ano: 476,
    sigla: 'DC'
}
const idadeModerna: idade = {
    nome: 'Idade Moderna',
    ano: 1453,
    sigla: 'DC'
}
const idadeContemporanea: idade = {
    nome: 'Idade Contemporânea',
    ano: 789,
    sigla: 'DC'
}
// PreHitoria= '100000 AC',
//     IdadeAntiga= 4000 'AC',
//     IdadeMedia = 476 'DC',
//     IdadeModerna = 1453 'DC',
//     IdadeContemporanea = 1789 'DC'
console.log(idadeHistorica(300, 'DC'))
console.log(idadeHistorica(3000, 'AC'))
console.log(idadeHistorica(3000, 'DC'))
console.log(idadeHistorica(800, 'AC'))