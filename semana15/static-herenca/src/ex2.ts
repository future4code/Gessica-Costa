import { User } from './index'

class Customer extends User {
    public purchaseTotal: number = 0
    private creditCard: string

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password)
        console.log('Chamando o construtor da classe Customer')
        this.creditCard = creditCard
    }

    public getCreditCard(): string {
        return this.creditCard
    }
}

const newCustomer: Customer = new Customer('1', 'ana@gmail.com', 'Ana', '123456', '123')

console.log(newCustomer)

// Exercício 2
// a. 1.
// b. 2, uma da instância do User e outra da instância do Customer.