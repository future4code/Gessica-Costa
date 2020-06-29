import { UserAccount, Transaction } from './index'
import { JSONFileManager } from './JSONFileManager'

const cpf: string = process.argv[2]
const name: string = process.argv[3]
const age: number = Number(process.argv[4])

const newUser: UserAccount = new UserAccount(cpf, name, age)

const fileManager: JSONFileManager = new JSONFileManager('users.json')
const users: UserAccount[] = fileManager.getObjectFromFile()
//console.log(users)
const userVerify: UserAccount | undefined = users.find(
    user => (user.getCpf() === cpf)
)
console.log('userVerify', userVerify)
//age >= 18 ? users.push(newUser) : console.log("O cliente deve ter no mínimo 18 anos para criar uma conta.")

//fileManager.writeObjectToFile(users)