export const robbingHouses = (input: number[]): number => {
    let pairHousesMoney: number = 0;
    let oddHousesMoney: number = 0;

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            pairHousesMoney += input[i];
        } else {
            oddHousesMoney += input[i];
        }
    }
    const isPairHousesMoney = pairHousesMoney

    return isPairHousesMoney > oddHousesMoney ? pairHousesMoney : oddHousesMoney;
}