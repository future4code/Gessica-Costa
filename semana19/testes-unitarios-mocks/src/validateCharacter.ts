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