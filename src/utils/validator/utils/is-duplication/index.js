/**
 * @param {string} input
 * @returns {boolean}
 */
export default function isDuplication(input) {
  const inputSet = new Set([...input]);
  return input.length !== inputSet.size;
}
