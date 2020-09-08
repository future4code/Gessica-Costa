import { missingNumber } from "./missingNumber"
import { indexOf } from "./indexOf"
import { robbingHouses } from "./robbingHouses";

//Exercício 1:
const hundred: number[] = [
  65, 2, 3, 4, 100, 6, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24,
  25, 26, 27, 29, 28, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 66, 67, 68, 69, 70, 72, 5,
  73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 19, 7, 71
]

console.log("missingNumber: ", missingNumber(hundred))

//Exercício 2:
console.log("indexOf: ", indexOf("gessica", "s"));

//Exercício 5:
const moneyHouses: number[] = [2,3,6,12,3,9,11,4]
console.log("robbingHouses: ", robbingHouses([1,2,3,1]))