"use strict";
const numbersBetween = (number1, number2) => {
    let numbersBetween = [];
    let quantity = 0;
    if (number2 >= number1) {
        for (let i = number1; i <= number2; i++) {
            numbersBetween.push(i);
            quantity++;
        }
    }
    else {
        for (let i = number2; i <= number1; i++) {
            numbersBetween.push(i);
            quantity++;
        }
    }
    return {
        numbersBetween: numbersBetween,
        quantity: quantity
    };
};
console.log(numbersBetween(5, 1));
console.log(numbersBetween(-3, 3));
console.log(numbersBetween(1, 1));
