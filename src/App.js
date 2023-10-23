import checkBallCount from "./utils/checkBallCount";
import makeRandomNumber from "./utils/makeRandomNumber";
import printBallCount from "./utils/printBallCount";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.gameTurn();
  }

  async gameTurn() {
    const randomNumber = makeRandomNumber();
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
      Console.print("입력이 올바르지 않습니다.");
    }
  }

  async checkAnswer() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    let input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (input === "1") {
      this.gameTurn();
    } else if (input === "2") {
      Console.print("게임을 종료합니다.");
    } else {
      throw new Error("잘못된 입력입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;
