/**
 * @param {string} input
 * @returns {boolean}
 */
export default function isNumber(input) {
  return !Number.isNaN(Number(input));
}
