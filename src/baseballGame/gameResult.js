/**
 * strikeCount와 ballCount를 입력받아 스트라이크, 볼, 낫싱 여부를 반환한다
 * 
 * @param {number} strikeCount
 * @param {number} ballCount
 * @returns {boolean}
 */
export default function gameResult(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return true;
  }
  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print('낫싱');
  }
  if (strikeCount === 0) {
    MissionUtils.Console.print(`${ballCount}볼`);
  } else if (ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`);
  } else {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }
  return false;
}


// console.log(gameResult(2, 1));
// console.log(gameResult(1, 0));
// console.log(gameResult(0, 1));
// console.log(gameResult(0, 0));
// console.log(gameResult(3, 0));
