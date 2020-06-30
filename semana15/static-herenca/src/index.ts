import { User } from './User'
import { Customer } from './Customer'

const newUser: User = new User('1', 'joao@gmail.com', 'João', '123456')
console.log(newUser)

// Exercício 1
// a. Não, pois é private e não possui método get relacionada ao password.
// b. 1.

const newCustomer: Customer = new Customer('1', 'ana@gmail.com', 'Ana', '123456', '123')
console.log(newCustomer)

// Exercício 2
// a. 1.
// b. 2, uma da instância do User e outra da instância do Customer.

console.log(
    newCustomer.getId(),
    newCustomer.getName(),
    newCustomer.getEmail(),
    newCustomer.getCreditCard()
)

// Exercício 3
// a. Não, porque o password é private e não possui método get.

console.log(newCustomer.introduceYourself())

