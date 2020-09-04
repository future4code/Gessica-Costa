import { notDeepStrictEqual } from "assert";

export const missingNumber = (input: number[]): number => {
    let orderedInput: number[] = [];
    let oneHunderOrdered: number[] = [];
    let missingNumber: number = 0;

    for (let number = 1; number <= 100; number++) {
        oneHunderOrdered.push(number);
    }

    orderedInput = input.sort(function (a, b) {
        return a - b;
    })

    for (const comparativeNumber of oneHunderOrdered) {
        if (orderedInput.indexOf(comparativeNumber) === -1) {
            missingNumber = comparativeNumber;
        }
    }


    return missingNumber;
}