export const indexOf = (source: string, query: string): number => {
    let index: number = -1;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === query) {
            return index = i;
        }
    }

    return index;
}