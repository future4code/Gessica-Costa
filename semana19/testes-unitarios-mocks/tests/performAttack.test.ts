import { performAttack, performAttackDI } from "../src/performAttack"
import { Character } from "../src/Character"

describe("performAttack", () => {
    test("validated character", () => {
        const validator = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Formiga",
            life: 1000,
            defense: 300,
            strength: 400
        }
        const defender: Character = {
            name: "Cupim",
            life: 1000,
            defense: 200,
            strength: 500
        }

        const result = performAttackDI(attacker, defender, validator)

        expect(result).toBe(800)
        expect(validator).toHaveBeenCalled()
        expect(validator).toHaveBeenCalledTimes(2)
        expect(validator).toHaveReturnedTimes(2)
    })

    test("invalidated character", () => {
        expect.assertions(4)

        const validator = jest.fn(() => {
            return false
        })
        const attacker: Character = {
            name: "Formiga",
            life: 1000,
            defense: 300,
            strength: 400
        }
        const defender: Character = {
            name: "Cupim",
            life: 1000,
            defense: -200,
            strength: 500
        }

        try {
            performAttackDI(attacker, defender, validator)
        } catch (err) {
            expect(err.message).toBe("Invalid Character")
            expect(validator).toHaveBeenCalled()
            expect(validator).toHaveBeenCalledTimes(1)
            expect(validator).toHaveReturnedTimes(1)
        }
    })
})

describe("more tests performAttack", () => {
    test("validated character", () => {
        const validator = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Magneto",
            life: 2000,
            defense: 500,
            strength: 1500
        }
        const defender: Character = {
            name: "Wolverine",
            life: 1000,
            defense: 500,
            strength: 800
        }

        const result = performAttackDI(attacker, defender, validator)

        expect(result).toBe(0)
        expect(validator).toHaveBeenCalled()
        expect(validator).not.toHaveBeenCalledTimes(1)
        expect(validator).toHaveReturnedTimes(2)
    })

    test("invalidated character", () => {
        expect.assertions(4)

        const validator = jest.fn(() => {
            return false
        })
        const attacker: Character = {
            name: "Formiga",
            life: 1000,
            defense: 300,
            strength: 400
        }
        const defender: Character = {
            name: "Cupim",
            life: 1000,
            defense: -200,
            strength: 500
        }

        try {
            performAttackDI(attacker, defender, validator)
        } catch (err) {
            expect(err.message).toBe("Invalid Character")
            expect(validator).toHaveBeenCalled()
            expect(validator).not.toHaveBeenCalledTimes(2)
            expect(validator).toHaveReturnedTimes(1)
        }
    })

    test("validated character", () => {
        const validator = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Magneto",
            life: 2000,
            defense: 500,
            strength: 1500
        }
        const defender: Character = {
            name: "Wolverine",
            life: 1000,
            defense: 500,
            strength: 800
        }

        const result = performAttackDI(attacker, defender, validator)

        expect(result).toBe(0)
        expect(validator).toHaveBeenCalled()
        expect(validator).toHaveReturnedTimes(2)
        expect(validator).toHaveReturnedWith(true)
    })

    test("invalidated character", () => {
        expect.assertions(2)

        const validator = jest.fn(() => {
            return false
        })
        const attacker: Character = {
            name: "Formiga",
            life: 1000,
            defense: 300,
            strength: 400
        }
        const defender: Character = {
            name: "Cupim",
            life: 1000,
            defense: -200,
            strength: 500
        }

        try {
            performAttackDI(attacker, defender, validator)
        } catch (err) {
            expect(err.message).toBe("Invalid Character")
            expect(err.message).toContain("Invalid")
        }
    })
})