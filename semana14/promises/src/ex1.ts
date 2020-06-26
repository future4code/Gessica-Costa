import { baseUrl } from './baseUrl'
import axios from 'axios'
// a) GET /subscribers/all
// b) any
// c)

async function getSubscribers(): Promise<any[]>{
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data
}

const main = async () => {
    
    try{
        const subscribers = await getSubscribers()
        console.log(subscribers)
    }
    catch(err){
        console.log(err)
    }
}
main()