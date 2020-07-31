import { Request, Response } from "express";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
    async create(req: Request, res: Response) {
        try {

            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(req.headers.authorization as string)

            if (tokenData.role !== UserRole.ADMIN) {
                throw new Error("Only admin can create bands")
            }

            if (!req.body.name || !req.body.musicGenre || !req.body.responsible) {
                throw new Error("Empty field(s)")
            }

            const input: BandInputDTO = {
                name: req.body.name,
                musicGenre: req.body.musicGenre,
                responsible: req.body.responsible
            }

            const bandBusiness = new BandBusiness()
            await bandBusiness.createBand(input)

            res.status(200).send({ message: "Banda cadastrada" })
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection()
    }

    async details(req: Request, res: Response) {
        try {

            const authenticator = new Authenticator()
            authenticator.getData(req.headers.authorization as string)

            if (!req.body.id && !req.body.name) {
                throw new Error("Empty field(s)")
            }

            const bandBusiness = new BandBusiness()
            let band

            req.body.id ?
                band = await bandBusiness.getBandById(req.body.id) :
                band = await bandBusiness.getBandByName(req.body.name)

            res.status(200).send({ band })
        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection()
    }
}