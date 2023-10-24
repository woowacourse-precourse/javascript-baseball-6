import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * strikeCount와 ballCount를 입력받아 정답 여부를 반환한다.
 * 
 * @param {number} strikeCount
 * @param {number} ballCount
 * @returns {boolean}
 */
export default function gameResult(strikeCount, ballCount) {
  let isAnswerCorrect = false;

  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print('낫싱');
  } else if (strikeCount === 0) {
    MissionUtils.Console.print(`${ballCount}볼`);
  } else if (ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`);
    if (strikeCount === 3) {
      isAnswerCorrect = true;
    }
  } else {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }

  return isAnswerCorrect;
}
