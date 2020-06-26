import { userAccount } from './types'
import * as moment from 'moment'
import * as fs from 'fs'

const newUser: userAccount = {
    name: process.argv[2],
    cpf: Number(process.argv[3]),
    dateOfBirth: moment(process.argv[4], "DD MM YYYY")
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

        if (today.diff(newUser.dateOfBirth, "years") >= 18) {
            userAccounts.push(newUser)

            const updatedData = JSON.stringify(userAccounts, null, 2)

            fs.writeFileSync("users.json", updatedData)

            console.log("Usuário cadastrado!")
        } else {
            console.log("Você deve ter no mínimo 18 anos para abrir uma conta.")
        }

    } catch (err) {
        console.log(err.message || err)
    }
}

createAccount(newUser)