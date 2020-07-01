import { Residence } from "./Residence";
import { Client } from "./Client";

export class ResidentialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        residentsQuantity: number,
        cep: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(residentsQuantity, cep)
    }

    getCpf = () => this.cpf

    calculateBill = () => this.consumedEnergy * 0.75
}