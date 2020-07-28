import { User, verifyAge, NACIONALITY, Casino, LOCATION, Result } from "../src/verifyAge"

describe("verifyAge simple tests", () => {
    test("Usuário brasileiro que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Maria",
            age: 20,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [user])

        expect(result.brazilian.allowed).toEqual(["Maria"])
    })

    test("Usuário americano que possa entrar em um estabelecimento no Brasil", () => {
        const user: User = {
            name: "Meg",
            age: 20,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [user])

        expect(result.american.allowed).toEqual(["Meg"])
    })

    test("Dois usuários brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.brazilian.allowed).toEqual([])
    })

    test("Dois brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.american.allowed).toEqual(["Meg", "Jack"])
    })
})

describe("verifyAge complex tests", () => {
    test("Um brasileiro em um estabelecimento no Brasil por tamanho do array", () => {
        const brazilian: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [brazilian])

        expect(result.brazilian.allowed.length).toBeGreaterThan(0)
        expect(result.brazilian.allowed.length).toBeLessThan(2)
    })

    test("Um americano em um estabelecimento no Brasil por tamanho do array", () => {
        const brazilian: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.BRAZIL
        }
        const result: Result = verifyAge(casino, [brazilian])

        expect(result.american.unallowed.length).toEqual(0)
    })

    test("Dois brasileiros e dois americanos em um estabelecimento no EUA por tamanho do array", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.american.unallowed[1]).toEqual("Jack")
    })

    test("Dois brasileiros e dois americanos em um estabelecimento no EUA", () => {
        const brazilian1: User = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: User = {
            name: "Meg",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Jack",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino",
            location: LOCATION.EUA
        }
        const result: Result = verifyAge(casino, [brazilian1, brazilian2, american1, american2])

        expect(result.brazilian.unallowed.length).toBeGreaterThan(1)
        expect(result.american.unallowed.length).toBeLessThan(1)
        expect(result.american.allowed.length).toEqual(2)
    })
})