import { validateCharacter } from "../src/validateCharacter"

describe("validateCharacter", () => {
    test("Character empty name", () => {

        const result = validateCharacter({
            name: "",
            life: 10,
            defense: 10,
            strength: 5
        })

        expect(result).toBe(false)
    })

    test("Character life", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 0,
            defense: 10,
            strength: 5
        })

        expect(result).toBe(true)
    })

    test("Character strength", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 10,
            defense: 10,
            strength: 0
        })

        expect(result).toBe(true)
    })

    test("Character defense", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 10,
            defense: 0,
            strength: 10
        })

        expect(result).toBe(true)
    })

    test("Character negative life", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: -10,
            defense: 10,
            strength: 10
        })

        expect(result).toBe(false)
    })

    test("Valid character", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 10,
            defense: 10,
            strength: 10
        })

        expect(result).toBe(true)
    })
})