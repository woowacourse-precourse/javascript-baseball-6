import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.randomNumberArray = [];
  }

  createRandomNumber() {
    while (this.randomNumberArray.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.randomNumberArray.includes(randomNumber)) {
        this.randomNumberArray.push(randomNumber);
      }
    }
  }

  async play() {
    this.createRandomNumber();
  }
}

const app = new App();

app.play();

export default App;
