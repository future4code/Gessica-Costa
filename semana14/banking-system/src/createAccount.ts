import { userAccount } from './types'
import * as moment from 'moment'
import * as fs from 'fs'

const newUser: userAccount = {
    name: process.argv[2],
    cpf: Number(process.argv[3]),
    dateOfBirth: moment(process.argv[4], "DD MM YYYY"),
    balance: 0
}

const bufferFile: Buffer = fs.readFileSync("users.json")
const textFile: string = String(bufferFile)
const userAccounts: userAccount[] = textFile ? JSON.parse(textFile) : []

const createAccount = (
    newUser: userAccount
): void => {
    //cadastrar usuário em arquivo users.json

    try {
        const today = moment()

        const registeredCpf = userAccounts.filter(user => user.cpf === newUser.cpf)

        if (today.diff(newUser.dateOfBirth, "years") >= 18) {
            if (registeredCpf.length === 0) {
                newAccount(newUser)
            } else {
                console.log("CPF já cadastrado.")
            }
        } else {
            console.log("Você deve ter no mínimo 18 anos para abrir uma conta.")
        }

    } catch (err) {
        console.log(err.message || err)
    }
}

const newAccount = (newUser: userAccount) => {
    userAccounts.push(newUser)

    const updatedData = JSON.stringify(userAccounts, null, 2)

    fs.writeFileSync("users.json", updatedData)

    console.log("Usuário cadastrado!")
}

createAccount(newUser)