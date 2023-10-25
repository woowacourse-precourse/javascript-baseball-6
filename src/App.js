import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.randomNumberArray = [];
  }

  createRandomNumber() {
    this.randomNumberArray = [...Random.pickUniqueNumbersInRange(1, 10, 3)];
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
    });
  }

  async play() {
    this.createRandomNumber();
    this.submitUserAnswerHalnder();
  }
}

const app = new App();

app.play();

export default App;
