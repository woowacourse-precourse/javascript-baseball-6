import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const answerNumber = this.createAnswerNumber();
    MissionUtils.Console.print(answerNumber);
    this.compareNumber(answerNumber);
  }

  //사용자가 입력한 숫자에 대해 유효성 검사를 진행하고 반환하는 메서드
  async createInputNumber() {
    let inputNumArray = [];
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const userInputSet = new Set(userInput);
      inputNumArray = userInput.split("").map(Number);
      if (
        inputNumArray.length !== userInputSet.size ||
        inputNumArray.length !== 3 ||
        Number.isNaN(parseInt(userInput))
      ) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else {
        return inputNumArray;
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  //서로다른 무작위 3개의 수가 들어있는 배열을 반환
  createAnswerNumber() {
    const answerNumArray = [];
    while (answerNumArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answerNumArray.includes(number)) {
        answerNumArray.push(number);
      }
    }
    return answerNumArray;
  }

  async compareNumber(answer) {
    let input = await this.createInputNumber();
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === input[i]) {
        strike++;
      } else if (answer.includes(input[i])) {
        ball++;
      }
    }
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restartQuestion();
    } else if (strike !== 0 || ball !== 0) {
      {
        if (strike === 0) {
          MissionUtils.Console.print(`${ball}볼`);
        } else if (ball === 0) {
          MissionUtils.Console.print(`${strike}스트라이크`);
        } else {
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
      return this.compareNumber(answer);
    } else {
      MissionUtils.Console.print("낫싱");
      return this.compareNumber(answer);
    }
  }

  async restartQuestion() {
    try {
      const restart = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (restart === "1") {
        const answerNumber = this.createAnswerNumber();
        MissionUtils.Console.print(answerNumber);
        this.compareNumber(answerNumber);
      } else if (restart === "2") {
        return;
      } else {
        throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}
const app = new App();
app.play();

export default App;
