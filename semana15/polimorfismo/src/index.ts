import { Client } from './Client'
import { Place } from './Place'

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

const newPlace: Place = new Place('12')
// Exercício 2
// a. "Cannot create an instance of an abstract class."