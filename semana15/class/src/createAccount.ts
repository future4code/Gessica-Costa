import { UserAccount, Transaction } from './index'
import { JSONFileManager } from './JSONFileManager'

const newUser: UserAccount = new UserAccount(
    process.argv[2], process.argv[3], Number(process.argv[4])
)

const fileManager: JSONFileManager = new JSONFileManager('users.json')
const users: any = fileManager.getObjectFromFile()

users.push(newUser)
fileManager.writeObjectToFile(users)