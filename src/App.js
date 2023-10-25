import { Console } from "@woowacourse/mission-utils";
import BaseballInput from "./BaseballInput";
import CalculateScore from "./CalculateScore";

class App {
  async play() {
    let IS_RESTART = true;
    const baseballInput = new BaseballInput();
    const calculateScore = new CalculateScore();

    baseballInput.startPrint();

    while (IS_RESTART) {
      const random = baseballInput.makeComputerNum();
      let RETRY_INPUT = true;

      while (RETRY_INPUT) {
        const userNum = await baseballInput.makeUserInput();
        const { BALL, STRIKE } = calculateScore.guessRandomNum(random, userNum);
        calculateScore.printAnswer(BALL, STRIKE);

        if (STRIKE === 3) {
          Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          RETRY_INPUT = false;
        }
      }
      IS_RESTART = await baseballInput.printEnd();
    }
  }
}

export default App;
