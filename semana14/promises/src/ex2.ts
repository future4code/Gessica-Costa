import axios from 'axios'
import {baseUrl } from './baseUrl'

const getSubscibers = async () => {
    return await axios.get(`${baseUrl}/subscribers/all`)
}

const main = async () => {
    const getUsers = await getSubscibers()

    console.log(getUsers)
}

main()