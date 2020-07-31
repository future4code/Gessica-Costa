import { Authenticator } from "../services/Authenticator"
import { Request, Response } from "express"
import { UserRole } from "../model/User"
import { ShowInputDTO, Show } from "../model/Show"
import { ShowBusiness } from "../business/ShowBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export class ShowController {
    async create(req: Request, res: Response) {
        try {

            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(req.headers.authorization as string)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new Error("Only admin can create shows")
            }

            if (!req.body.weekDay || !req.body.startTime || !req.body.endTime || !req.body.bandId) {
                throw new Error("Empty field(s)")
            }

            if (req.body.startTime < 8 ||
                req.body.startTime > 22 ||
                req.body.endTime < 9 ||
                req.body.endTime > 23) {
                throw new Error("Show must by between 8pm and 11pm(23h)")
            }

            if(req.body.weekDay !== "SEXTA" &&
            req.body.weekDay !== "SÁBADO" &&
            req.body.weekDay !== "DOMINGO") {
                throw new Error("Show must be SEXTA, SÁBADO ou DOMINGO")
            }

            const input: ShowInputDTO = {
                weekDay: req.body.weekDay,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                bandId: req.body.bandId
            }
            
            const showBusiness = new ShowBusiness()
            await showBusiness.createShow(input)

            res.status(200).send({ message: "Show cadastrado" })
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection()
    }
}