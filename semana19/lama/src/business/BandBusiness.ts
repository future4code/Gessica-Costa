import { BandInputDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {

    async createBand(band: BandInputDTO) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(id, band.name, band.musicGenre, band.responsible)
    }

    async getBandById(id: string) {

        const bandDatabase = new BandDatabase()
        return await bandDatabase.getBandById(id)
    }

    async getBandByName(name: string) {

        const bandDatabase = new BandDatabase()
        return await bandDatabase.getBandByName(name)
    }
}