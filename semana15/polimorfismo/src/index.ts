import { Client } from './Client'
import { Place } from './Place'
import { Residence } from './Residence'
import { Commerce } from './Commerce'
import { Industry } from './Industry'

const newClient: Client = {
    name: 'Géssica',
    registrationNumber: 1,
    consumedEnergy: 1,
    calculateBill: () => 2
}

console.log(newClient)
console.log(newClient.calculateBill())
// Exercício 1
// a. Consegui imprimir todas.

//const newPlace: Place = new Place('12')
// Exercício 2
// a. "Cannot create an instance of an abstract class."
// b. Criar uma nova class subclasse da Place, que não seja abstrata.

const newResidence: Residence = new Residence(8, '12334556778')
const newCommerce: Commerce = new Commerce(10, '12345678910')
const newIndustry: Industry = new Industry(3, '12345678910')

console.log(newResidence.getCep())
console.log(newCommerce.getCep())
console.log(newIndustry.getCep())

// Exercício 4
// a. A classe ResidentialClient possui métodos e propriedades
// da classe e interface mãe/pai, porque por ser filha ela tem
// que ter os atributos e métodos dos pais.

// Exercício 5
// a. As duas herdaram atributos e o método calculateBill de Client.
// b. A classe herdada por elas são diferentes, com isso algun atributos
// são diferentes.