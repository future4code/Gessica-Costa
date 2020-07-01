import { User } from './User'
import * as moment from 'moment'

export class Employee extends User {
    protected admissionDate: moment.Moment
    protected baseSalary: number

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: moment.Moment,
        baseSalary: number
    ) {
        super(id, email, name, password)
        console.log('Chamando o construtor da classe Employee')
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    getAdmissionDate = (): moment.Moment => this.admissionDate
    getBaseSalary = (): number => this.baseSalary
}