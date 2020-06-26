import { userAccount } from './types'
import * as moment from 'moment'
import * as fs from 'fs'

const getAllAccounts = () => {
    //pegar todos usuário de users.json

    const bufferFile: Buffer = fs.readFileSync("users.json")
    const textFile: string = String(bufferFile)
    const userAccounts: userAccount[] = textFile ? JSON.parse(textFile) : []

    console.log(userAccounts)
}

getAllAccounts()