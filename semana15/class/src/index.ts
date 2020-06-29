import * as moment from 'moment'
/*
1) O método construtor serve para cadastrar novas variáveis desse tipo de classe.
As variáveis que não estão definidas serão informadas fora da classe, cpf, name e age.
Para chamá-la, declaramos uma variável igual a new UserAccount(), informando o
cpf, name e age dentro do parênteses.

2) 1.

3) Criando métodos para ler essas informações. Exemplo: getCpf.

4) Sim, o balance.
*/

export class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = []

    constructor(
        cpf: string,
        name: string,
        age: number
    ) {
        console.log('Chamando o construtor da classe UserAccount')
        this.cpf = cpf
        this.name = name
        this.age = age
    }

    public getCpf = (): string => this.cpf
    public Name = (): string => this.name
    public getAge = (): number => this.age
    public getBalance = (): number => this.balance

    public addBalance(value: number): void {
        this.balance += value
        console.log('Saldo atualizado com sucesso')
    }

    public addTransaction = (newTransiction: Transaction) => this.transactions.push(newTransiction)
}

export class Transaction {
    private date: moment.Moment
    private value: number
    private description: string

    constructor(date: moment.Moment, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }
}

const eu: UserAccount = new UserAccount('8908989089', 'Géssica', 27)
// eu.addBalance(Number(process.argv[2]))
// console.log(eu.getBalance())