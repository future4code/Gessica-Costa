import dotenv from 'dotenv'
import express from 'express'
import { AddressInfo } from 'net'
import { v4 } from 'uuid'
import { UserDatabase } from './data/users'

dotenv.config()

const app = express()

app.use(express.json())

const id = v4()
console.log('Generated Id: ', id)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure ipon starting server.`)
    }
})

// const newUser: UserDatabase = new UserDatabase
// newUser.createUser('1', 'astrodev@gmail.com', '123')

