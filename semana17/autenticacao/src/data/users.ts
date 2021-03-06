import { db } from './dataSetup'

export class UserDatabase {
    private static TABLE_NAME = 'User'
    
    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await db()
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }
}