import { performPurchase, User } from "../src/performPurchase"

describe("performPurchase", () => {
    test("Usuário com saldo maior que o valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 150
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual({
            name: "Géssica",
            balance: 50
        })
    })

    test("Usuário com saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 100
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual({
            name: "Géssica",
            balance: 0
        })
    })

    test("Usuário com saldo menor que o valor de compra", () => {
        const user: User = {
            name: "Géssica",
            balance: 50
        }
        const value: number = 100
        const result = performPurchase(user, value)

        expect(result).toEqual(undefined)
    })
})