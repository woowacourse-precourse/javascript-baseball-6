/**
 * strike, balls로 result text를 반환하는 함수 
 * @param {number} strikes 
 * @param {number} balls 
 * @returns {string} ex. 1볼 1스트라이크 | 낫싱 | 3볼 ...
 */
export const getResultFromScore = (strikes, balls) => {
    if (strikes == 0 && balls == 0) return "낫싱";

    const result = [];

    if (balls > 0) result.push(`${balls}볼`);

    if (strikes > 0) result.push(`${strikes}스트라이크`);

    return result.join(" ");
}