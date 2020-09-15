export const largestCommomPrefix = (input: string[]): string => {
    let initialWord: string = input[0];
    let commomPrefix: string = "";

    for(let i = 1; i < input.length; i++){
        for(const letter of initialWord){
            if(input[i].indexOf(letter) !== -1){
                commomPrefix += letter;
                initialWord = commomPrefix;
                console.log(commomPrefix, " ", input[i])
            }
        }
    }

    return commomPrefix;
}