import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

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

    public async getAllShowsByDay(week_day: string): Promise<Show> {
        const result = await this.getConnection()
            .select('*')
            .from(ShowDatabase.TABLE_NAME)
            .where({ week_day })
            .orderBy('start_time')

        return Show.toShowModel(result[0])
    }
}