import { Console } from "@woowacourse/mission-utils";
import BaseballInput from "./BaseballInput";

class App {
  async play() {
    let restartGame = true;
    const baseballInput = new BaseballInput();
    baseballInput.startPrint();

    while (restartGame) {
      const random = baseballInput.makeComputerNum();
      let userRetryInput = true;

      while (userRetryInput) {
        const userNum = await baseballInput.makeUserInput();
        const { ball, strike } = baseballInput.guessRandomNum(random, userNum);
        baseballInput.printAnswer(ball, strike);

        if (strike === 3) {
          Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
          userRetryInput = false;
        }
      }
      restartGame = await baseballInput.printEnd();
    }
  }
}

export default App;
