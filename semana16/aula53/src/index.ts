import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)

    return console.log(result[0][0])
}


const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

    return console.log(result[0][0])
}

const getActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
    `)
    
    return console.log(result[0])
}

const getActorGenderCount = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    
    return console.log(result[0][0])
}

getActorGenderCount("male")
//getActors()