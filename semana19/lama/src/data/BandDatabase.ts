import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME: string = 'Lama_Bands'

    public static getTableName = () => BandDatabase.TABLE_NAME

    public async createBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id,
                    name,
                    music_genre,
                    responsible
                })
                .into(BandDatabase.TABLE_NAME)
        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }

    public async getBandById(id: string): Promise<Band> {
        const result = await this.getConnection()
            .select('*')
            .from(BandDatabase.TABLE_NAME)
            .where({ id })

        return Band.toBandModel(result[0])
    }

    public async getBandByName(name: string): Promise<Band> {
        const result = await this.getConnection()
            .select('*')
            .from(BandDatabase.TABLE_NAME)
            .where({ name })

        return Band.toBandModel(result[0])
    }
}