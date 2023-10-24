import { MissionUtils } from "@woowacourse/mission-utils";
import makeAnswer from "../makeAnswer/makeAnswer.js";
import getUserInput from "../input/getUserInput.js";
import countBall from "./countBall.js";
import countStrike from "./countStrike.js";
import gameResult from "./gameResult.js";
import getRestartDecision from "../input/getRestartDecision.js";

/**
 * 야구게임을 실행한다
 * 
 */
export default async function baseballGame() {
  let repeatsRestart = true;

  while (repeatsRestart) {
    const answer = makeAnswer();
    let isAnswerCorrect = false;

    while (!isAnswerCorrect) {
      // userInput validation
      const userInput = await getUserInput();
  
      // check for correct answer
      const strikeCount = countStrike(answer, userInput);
      const ballCount = countBall(answer, userInput) - strikeCount;
      const isAnswerCorrect = gameResult(strikeCount, ballCount);

      // restart or exit
      if (isAnswerCorrect) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        repeatsRestart = await getRestartDecision();
        break;
      }
    }
  }
}
