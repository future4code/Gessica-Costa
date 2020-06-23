let minhaString: string = ''
// a) Aparece uma mensagem de erro informando que o tipo do número não é atribuível para o tipo String.
let meuNumero: number | string = 2+'b'
// b) Colocamos o '| string' depois do number
// c) Definindo a tipagem de cada chave de pessoa.
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: 'eu',
    idade: 0,
    corFavorita: 'azul'
}

// d) 
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const joao: pessoa = {
    nome: 'João',
    idade: 10,
    corFavorita: 'roxo'
}

const maria: pessoa = {
    nome: 'Maria',
    idade: 20,
    corFavorita: 'verde'
}

const pedro: pessoa = {
    nome: 'Pedro',
    idade: 15,
    corFavorita: 'magenta'
}
// e)
enum coresDoArcoIris {
    cor1 = 'vermelho',
    cor2 = 'laranja',
    cor3 = 'amarelo',
    cor4 = 'verde',
    cor5 = 'azul',
    cor6 = 'anil',
    cor7 = 'violeta',
}

type pessoa2 = {
    nome: string,
    idade: number,
    corFavorita: coresDoArcoIris
}
const luis: pessoa2 = {
    nome: 'Luis',
    idade: 15,
    corFavorita: coresDoArcoIris.cor6
}