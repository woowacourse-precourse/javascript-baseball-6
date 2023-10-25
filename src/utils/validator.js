export const isOutOfRange = (value, min, max) => min > value || max < value;

export const isDuplicated = (arr) => new Set(arr).size !== arr.length;
