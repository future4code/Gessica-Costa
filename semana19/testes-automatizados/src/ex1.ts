export const performPurchase = (user: User, value: number):
    User | undefined => {

    let userUpdated: User

    return user.balance >= value ?
        userUpdated = {
            name: user.name,
            balance: user.balance - value
        }
        :
        undefined
}

export interface User {
    name: string,
    balance: number
}