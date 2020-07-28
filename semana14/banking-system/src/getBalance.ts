import * as fs from 'fs'
import { userAccount } from './types'

const name: string = process.argv[2]
const cpf: number = Number(process.argv[3])

const getBalance = (
    name: string,
    cpf: number
): void => {
    const bufferFile: Buffer = fs.readFileSync("users.json")
    const textFile: string = String(bufferFile)
    const userAccounts: userAccount[] = textFile ? JSON.parse(textFile) : []

    const userFilter = userAccounts.filter(user =>
        user.name === name && user.cpf === cpf
    )

    userFilter.length !== 0 ? (
        console.log(userFilter.map(user => user.balance))
    ) : (
            console.log("Nome e/ou CPF não cadastrado.")
        )
}

getBalance(name, cpf)