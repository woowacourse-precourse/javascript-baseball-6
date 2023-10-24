import { MissionUtils } from "@woowacourse/mission-utils";
import makeAnswer from "../makeAnswer/makeAnswer.js";
import getUserInput from "../input/getUserInput.js";
import countBall from "./countBall.js";
import countStrike from "./countStrike.js";
import gameResult from "./gameResult.js";

/**
 * 야구게임을 실행한다
 * 
 * @todo indent 많아서 기능 분할 필요
 */
export default async function baseballGame() {
  let restart = true;

  while (restart) {
    const answer = makeAnswer();
    let wrongAnswer = true;
    // console.log(`answer: ${answer}`);
    // console.log(`restart: ${restart}, wrongAnswer: ${wrongAnswer}`);

    while (wrongAnswer) {
      const userInput = await getUserInput();
      const strikeCount = countStrike(answer, userInput);
      const ballCount = countBall(answer, userInput) - strikeCount;

      if (strikeCount === 3) {
        MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const restartChoice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

        if (restartChoice === "2") {
          restart = false;
        }
        wrongAnswer = false;
        // console.log(`restart: ${restart}, wrongAnswer: ${wrongAnswer}`);
        break;
      }

      const resultMessage = gameResult(strikeCount, ballCount);
      MissionUtils.Console.print(resultMessage);
    }
  }
}

baseballGame();