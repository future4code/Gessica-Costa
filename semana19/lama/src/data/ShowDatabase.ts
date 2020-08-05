import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";
import { BandDatabase } from "./BandDatabase";

export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = 'Lama_Shows'

    public async createShow(
        id: string,
        week_day: string,
        start_time: number,
        end_time: number,
        band_id: string
    ): Promise<void> {

        try {
            await this.getConnection()
                .insert({
                    id,
                    week_day,
                    start_time,
                    end_time,
                    band_id
                })
                .into(ShowDatabase.TABLE_NAME)
        } catch (err) {
            throw new Error(err.sqlMessage || err.message)
        }
    }

    public async getAllShowsByDay(week_day: string, start_time: string = 'start_time'): Promise<any> {

        const result = await this.getConnection()
            .select('start_time', 'end_time', 'name', 'music_genre')
            .from(ShowDatabase.TABLE_NAME)
            .where({ week_day })
            .leftJoin(BandDatabase.getTableName(), 'Lama_Shows.band_id', 'Lama_Bands.id')
            .orderBy(start_time)

        return result
    }
}