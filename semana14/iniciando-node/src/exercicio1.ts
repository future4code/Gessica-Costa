// a) Igualamos um variável a process.argv[2]
// b)
const name1: string = process.argv[2]
const age: number = Number(process.argv[3])

console.log(`Olá, ${name1}! Você tem ${age} anos. Em sete anos você terá ${age + 7} anos.`)