import { ShowInputDTO } from "../model/Show";
import { IdGenerator } from "../services/IdGenerator";
import { ShowDatabase } from "../data/ShowDatabase";

export class ShowBusiness {

    async createShow(show: ShowInputDTO) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const showDatabase = new ShowDatabase()
        await showDatabase.createShow(id, show.weekDay, show.startTime, show.endTime, show.bandId)
    }

    async getAllShowsByDay(weekDay: string) {
        
        const showDatabase = new ShowDatabase()
        return await showDatabase.getAllShowsByDay(weekDay)
    }
}