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
      console.log(` ${answer}`);
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
