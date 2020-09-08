export const indexOf = (source: string|number[], query: string|number): number => {
    let index: number = -1;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === query) {
            return index = i;
        }
    }

    return index;
}