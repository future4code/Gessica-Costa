### Exercício 1
a)
```
export interface Character {
    name: string,
    life: number,
    defense: number,
    strength: number
}
```
b)
```
import { Character } from "./Character";

export const validateCharacter = (input: Character): boolean => {
    if (input.name &&
        input.life >= 0 &&
        input.strength >= 0 &&
        input.defense >= 0) {
        return true
    }

    return false
}
```

### Exercício 2
a)
```
test("Character empty name", () => {

        const result = validateCharacter({
            name: "",
            life: 10,
            defense: 10,
            strength: 5
        })

        expect(result).toBe(false)
    })
```
b) c) d) Não é permitido, devido a esses atributos serem tipados como number.
e)
```
test("Character negaive life", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: -10,
            defense: 10,
            strength: 10
        })

        expect(result).toBe(false)
    })
```
f)
```
test("Character life", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 0,
            defense: 10,
            strength: 5
        })

        expect(result).toBe(true)
    })
```
g)
```
test("Valid character", () => {

        const result = validateCharacter({
            name: "Squirtle",
            life: 10,
            defense: 10,
            strength: 10
        })

        expect(result).toBe(true)
    })
```

### Exercício 3
a)
```
export const performAttack = (attacker: Character, defender: Character) => {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    return defender.defense >= attacker.strength ?
        defender.life :
        defender.life -= attacker.strength - defender.defense
}
```
b)
```
export const performAttackDI = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {

    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    return defender.defense >= attacker.strength ?
        defender.life :
        defender.life -= attacker.strength - defender.defense
}
```
c) Com a inversão de dependências é utilizado um callback da função utilizada como entrada da função implementada., facilitando a alteração do callback caso necessário.

### Exercício 4
a) validateCharacter, pois ela é utilizada na função performAttack, então não dependeríamos da validateCharacter para testarmos a performAttack.
b)
```
test("mock validateCharacter", () => {
        const mockValidateCharacter = jest.fn(() => {
            return true
        })
})
```
c)
```
const mockNotValidateCharacter = jest.fn(() => {
            return false
})
```

### Exercício 5
a)
```
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
```
b)
```
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
```

### Exercício 6
```
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
```
