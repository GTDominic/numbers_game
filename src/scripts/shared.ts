export let values: {
    startarray: number[],
} = {
    startarray: [],
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}