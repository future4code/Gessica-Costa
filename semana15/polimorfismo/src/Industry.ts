import { Place } from "./Place";

export class Industry extends Place {
    constructor(
        protected machinedQuantity: number,
        cep: string
    ) {
        super(cep)
    }

    getMachinedQuantity = () => this.machinedQuantity
}