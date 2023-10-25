import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.randomNumberArray = [];
  }

  createRandomNumber() {
    this.randomNumberArray = [...Random.pickUniqueNumbersInRange(1, 9, 3)];
  }

  submitUserAnswerHalnder() {
    Console.readLine("게임 시작! 숫자 3개를 입력해 주세요", (answer) => {
      const userAnswerArray = Array.from(answer, Number);

      if (isNaN(answer)) {
        throw new Error("[Error] 숫자만 입력해 주세요.");
      }

      if (userAnswerArray.length !== 3 || userAnswerArray.includes(0)) {
        throw new Error("[Error] 0을 제외한 3자리의 숫자를 입력해 주세요.");
      }

      if (userAnswerArray.length !== [...new Set(userAnswerArray)].length) {
        throw new Error("[Error] 중복되지 않은 3자리의 숫자를 입력해 주세요.");
      }

      return this.createUserAnswerResult(userAnswerArray);
    });
  }

  createUserAnswerResult(userAnswerArray) {
    let resultStrike = 0;
    let resultBall = 0;
    let currnetIndexValueResult;

    for (let index = 0; index < 3; index++) {
      currnetIndexValueResult = userAnswerArray.findIndex((element) => {
        return element == this.randomNumberArray[index];
      });

      if (currnetIndexValueResult == index) resultStrike = resultStrike + 1;
      if (currnetIndexValueResult !== -1 && currnetIndexValueResult !== index)
        resultBall = resultBall + 1;
    }

    this.gameReultPrint(resultBall, resultStrike);
  }

  gameReultPrint(resultBall, resultStrike) {}

  async play() {
    this.createRandomNumber();
    this.submitUserAnswerHalnder();
  }
}

const app = new App();

app.play();

export default App;
