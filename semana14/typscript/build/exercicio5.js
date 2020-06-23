function idadeHistorica(ano, sigla) {
    if (sigla === 'AC') {
        if (ano <= preHistoria.ano && ano > idadeAntiga.ano) {
            return preHistoria.nome;
        }
        else if (ano <= idadeAntiga.ano && ano > idadeMedia.ano) {
            return idadeAntiga.nome;
        }
        else {
            return 'Valor incorreto do ano';
        }
    }
    else if (sigla === 'DC') {
        if (ano >= idadeMedia.ano && ano < idadeModerna.ano) {
            return idadeMedia.nome;
        }
        else if (ano >= idadeModerna.ano && ano < idadeContemporanea.ano) {
            return idadeModerna.nome;
        }
        else if (ano >= idadeContemporanea.ano) {
            return idadeContemporanea.nome;
        }
        else {
            return 'Valor incorreto do ano';
        }
    }
    else {
        return 'Valor incorreto da sigla';
    }
}
var idade2;
(function (idade2) {
    idade2[idade2["PreHistoria"] = 100000] = "PreHistoria";
    idade2[idade2["IdadeAntiga"] = 4000] = "IdadeAntiga";
    idade2[idade2["IdadeMedia"] = 476] = "IdadeMedia";
    idade2[idade2["IdadeModerna"] = 1453] = "IdadeModerna";
    idade2[idade2["IdadeContemporanea"] = 789] = "IdadeContemporanea";
})(idade2 || (idade2 = {}));
const preHistoria = {
    nome: 'Pré-História',
    ano: 100000,
    sigla: 'AC'
};
const idadeAntiga = {
    nome: 'Idade Antiga',
    ano: 4000,
    sigla: 'AC'
};
const idadeMedia = {
    nome: 'Idade Média',
    ano: 476,
    sigla: 'DC'
};
const idadeModerna = {
    nome: 'Idade Moderna',
    ano: 1453,
    sigla: 'DC'
};
const idadeContemporanea = {
    nome: 'Idade Contemporânea',
    ano: 789,
    sigla: 'DC'
};
console.log(idadeHistorica(300, 'DC'));
console.log(idadeHistorica(3000, 'AC'));
console.log(idadeHistorica(3000, 'DC'));
console.log(idadeHistorica(800, 'AC'));
//# sourceMappingURL=exercicio5.js.map