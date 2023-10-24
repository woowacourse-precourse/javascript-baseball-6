import { MissionUtils } from "@woowacourse/mission-utils";
import { generateComputerAnswer } from './generateComputerAnswer.js';
import { getUserNumber } from "./getUserNumber.js";
import { calculateResult } from './calculateResult.js';

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const COMPUTER_ANSWER_LENGTH = 3;
    const computerAnswer = generateComputerAnswer(COMPUTER_ANSWER_LENGTH);

    while (true) {
      const userGuess = await getUserNumber(COMPUTER_ANSWER_LENGTH);

      const { strike, ball, message } = calculateResult(computerAnswer, userGuess);

      MissionUtils.Console.print(message);

      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }

    const playOption = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
    
    if(playOption === '1') {
      this.play();
    } else if(playOption === '2') {
      MissionUtils.Console.print("게임을 종료합니다.");
    }
  }
}

export default App;

const app = new App();
app.play();
