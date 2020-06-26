import * as moment from 'moment'

export type userAccount = {
    name: string,
    cpf: number,
    dateOfBirth: moment.Moment,
    balance: number
}

export type statement = {
    value: number,
    date: moment.Moment,
    description: string
}