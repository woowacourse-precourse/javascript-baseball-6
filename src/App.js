import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.randomNumberArray = [];
  }

  createRandomNumber() {
    this.randomNumberArray = [...Random.pickUniqueNumbersInRange(1, 10, 3)];
  }

  async play() {
    this.createRandomNumber();
  }
}

const app = new App();

app.play();

export default App;
