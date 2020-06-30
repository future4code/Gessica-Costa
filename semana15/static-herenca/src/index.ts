export class User {
    private id: string
    private email: string
    private name: string
    private password: string

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ){
        console.log('Chamando o construtor da classe User')
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

const newUser: User = new User('1', 'joao@gmail.com', 'João', '123456')
console.log(newUser)

// Exercício 1
// a. Não, pois é private e não possui método get relacionada ao password.
// b. 1.