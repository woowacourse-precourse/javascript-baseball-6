import countBall from "./countBall.js";
import countStrike from "./countStrike.js";

/**
 * strikeCount와 ballCount를 입력받아 스트라이크, 볼, 낫싱 여부를 반환한다
 * 
 * @param {number} strikeCount
 * @param {number} ballCount
 * @returns {string}
 */
export default function gameResult(strikeCount, ballCount) {
  if (strikeCount + ballCount === 0) {
    return '낫싱';
  }
  if (strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0) {
    return `${strikeCount}스트라이크`
  }
  
  return `${ballCount}볼 ${strikeCount}스트라이크`;
}


// console.log(gameResult(2, 1));
// console.log(gameResult(1, 0));
// console.log(gameResult(0, 1));
// console.log(gameResult(0, 0));
// console.log(gameResult(3, 0));
