import { robbingHouses } from "../src/robbingHouses";

describe("Testing robbingHouses", () => {

    test("Should return 4 for input [1,2,3,1]", () => {
        const result = robbingHouses([1, 2, 3, 1]);
        expect(result).toEqual(4);
    })

    test("Should return 12 for input [2,7,9,3,1]", () => {
        const result = robbingHouses([2, 7, 9, 3, 1]);
        expect(result).toBe(12);
    })

    test("Should return 28 for input [2,3,6,12,3,9,11,4]", () => {
        const result = robbingHouses([2, 3, 6, 12, 3, 9, 11, 4]);
        expect(result).toBe(28);
    })
});