import { Character } from "./Character";
import { validateCharacter } from "./validateCharacter";

export const performAttack = (attacker: Character, defender: Character) => {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid Character")
    }

    return defender.defense >= attacker.strength ?
        defender.life :
        defender.life -= attacker.strength - defender.defense
}

export const performAttackDI = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {

    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    return defender.defense >= attacker.strength ?
        defender.life :
        defender.life -= attacker.strength - defender.defense
}