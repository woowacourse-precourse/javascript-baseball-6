import generateRandomNumber from "./utils/generateRandomNumbers";
import checkBallCount from "./utils/checkBallCount";
import printBallCount from "./utils/printBallCount";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameTurn();
  }

  async gameTurn() {
    const randomNumber = generateRandomNumber();
    await this.gameStart(randomNumber);
  }

  async gameStart(answer) {
    try {
      while (true) {
        const inputNumber = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        const score = checkBallCount(inputNumber, answer);
        Console.print(printBallCount(score));

        if (score.strike === 3) {
          Console.print("3스트라이크");
          this.checkAnswer();
          break;
        }
      }
    } catch (error) {
      //인풋이 올바른지 확인하는 유효성 검사 필요
    }
  }

  checkAnswer() {}
}

const app = new App();
app.play();

export default App;
