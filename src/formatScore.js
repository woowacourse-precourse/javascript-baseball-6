/** @typedef {import('./scoreAnswer').Score} Score */

/** @param {Score} balls */
export const formatBalls = ({ balls }) => (balls > 0 ? `${balls}볼` : null);

/** @param {Score} strikes */
export const formatStrikes = ({ strikes }) => (strikes > 0 ? `${strikes}스트라이크` : null);

/**
 * @param {Score} score - 채점 결과
 * @returns {string} - 채점 결과를 문자열로 변환한 값
 */
export const formatScore = (score) => [formatBalls, formatStrikes]
  .map((f) => f(score))
  .filter((x) => x !== null)
  .join(' ') || '낫싱';
