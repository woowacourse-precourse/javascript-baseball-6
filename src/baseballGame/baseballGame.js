import { MissionUtils } from "@woowacourse/mission-utils";
import makeAnswer from "../makeAnswer/makeAnswer.js";
import getUserInput from "../input/getUserInput.js";
import countBall from "./countBall.js";
import countStrike from "./countStrike.js";
import gameResult from "./gameResult.js";
import checkInputValid from "../input/checkInputValid.js";
import getRestartDecision from "../input/getRestartDecision.js";

/**
 * 야구게임을 실행한다
 * 
 * @todo indent 많아서 기능 분할 필요
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default async function baseballGame() {
  let repeatsRestart = true;

  while (repeatsRestart) {
    const answer = makeAnswer();
    let isAnswerCorrect = false;
    console.log(`answer: ${answer}`);

    while (!isAnswerCorrect) {
      // userInput validation
      const userInput = await getUserInput();
      try {
        if (!checkInputValid(userInput)) {
          throw new Error("잘못된 값을 입력했습니다.");
        }
      } catch (err){
        MissionUtils.Console.print("Error : " + err.message);
        return;
      }

      // check for correct answer
      const strikeCount = countStrike(answer, userInput);
      const ballCount = countBall(answer, userInput) - strikeCount;
      const isAnswerCorrect = await gameResult(strikeCount, ballCount);

      // restart or exit
      if (isAnswerCorrect) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        repeatsRestart = await getRestartDecision();
        break;
      }
    }
  }
}

baseballGame();