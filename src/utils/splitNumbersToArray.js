/**
 * 문자열로 이루어진 수를 숫자로 이루어진 배열로 나누어 변환합니다.
 * @param {string} string
 * @returns {number[]}
 */
export const splitNumbersToArray = (string) => string.split('').map(Number);
