/**
 * 타겟 숫자가 포함되어 있으면 true, 포함되어 있지 않으면 false 리턴
 * @param {string} input
 * @param {number} targetNumber
 * @returns {boolean}
 */
export default function isParticularNumber(input, targetNumber) {
  return input.includes(String(targetNumber));
}
