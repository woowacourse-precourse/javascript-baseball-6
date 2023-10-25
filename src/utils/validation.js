export const hasNaNArray = (arr) =>
  arr.some((element) => Number.isNaN(element));
export const isOutOfRange = (num, min, max) => num < min || num > max;
export const hasOutOfRangeArray = (arr, min, max) =>
  arr.some((element) => isOutOfRange(element, min, max));
export const isWrongLength = (arr, num) => arr.length !== num;
export const hasSameNumberArray = (arr) =>
  arr.some((element) => arr.indexOf(element) !== arr.lastIndexOf(element));
