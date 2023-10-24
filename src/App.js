import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = this.randomNumber();

    while (true) {
      const userAnswer = await this.getUserInput("숫자를 입력해주세요 :");
      const result = this.calculateResult(computerNumber, userAnswer);
      MissionUtils.Console.print(`${result}`);

      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restart = await this.regame(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (restart === 1) {
          return this.play();
        } else if (restart === 2) {
          break;
        } else {
          throw new Error("[ERROR] : 입력오류");
        }
      }
    }
  }

  async getUserInput(question) {
    const userInput = await MissionUtils.Console.readLineAsync(question);
    if (userInput.length === 3) {
      return String(userInput)
        .split("")
        .map((item) => Number(item));
    } else {
      throw new Error("[ERROR] : 입력오류");
    }
  }

  async regame(question) {
    const regame = await MissionUtils.Console.readLineAsync(question);
    return Number(regame);
  }

  randomNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  calculateResult(computerNumber, userAnswer) {
    let strike = 0;
    let ball = 0;
    let result = "";

    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userAnswer[i]) {
        strike++;
      } else if (userAnswer.includes(computerNumber[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      result = "낫싱";
    } else if (ball === 0) {
      result = `${strike}스트라이크`;
    } else if (strike === 0) {
      result = `${ball}볼`;
    } else {
      result = `${ball}볼 ${strike}스트라이크`;
    }

    return result;
  }
}

const app = new App();
app.play();

export default App;
