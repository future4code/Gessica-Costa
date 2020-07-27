export const verifyAge = (casino: Casino, users: User[]): Result => {
    let result: Result

    users && users.map((u: any) => {
        if (u.nacionality = NACIONALITY.AMERICAN) {
            u.age >= 21 ?
                result.american.allowed.push(u)
                : result.american.unallowed.push(u)
        } else if (u.nacionality = NACIONALITY.BRAZILIAN) {
            u.age >= 18 ?
                result.brazilian.allowed.push(u)
                : result.brazilian.unallowed.push(u)
        }
    })

    return result
}

interface User {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

interface Casino {
    name: string,
    location: LOCATION
}

interface Result {
    brazilian: ResultItem
    american: ResultItem
}

interface ResultItem {
    allowed: string[]
    unallowed: string[]
}

enum LOCATION {
    EUA = "EUA",
    BRASIL = "BRAZIL"
}

enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}