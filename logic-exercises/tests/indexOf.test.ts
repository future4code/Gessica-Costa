import { indexOf } from "../src/indexOf";

describe("Testing indexOf", () => {

    test("Should return 6 for input 'gessica', 'a'", () => {
        const result = indexOf("gessica", "a");
        expect(result).toEqual(6);
    })

    test("Should return 2 for input 'gessica', 's'", () => {
        const result = indexOf("gessica", "s");
        expect(result).toBe(2);
    })

    test("Should return 0 for input 'gessica', 'g'", () => {
        const result = indexOf("gessica", "g");
        expect(result).toBe(0);
    })

    test("Should return -1 for no existing query in source", () => {
        const result = indexOf("gessica", "f");
        expect(result).toEqual(-1);
    })

});