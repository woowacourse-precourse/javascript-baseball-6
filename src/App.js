import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.isPlaying = false;
    this.isCorrect = false;

    this.computer = [];
    this.user = [];

    this.status = {
      strike: 0,
      ball: 0,
      out: 0,
    };

    this.init();
  }

  init() {
    this.isPlaying = true;
    this.isCorrect = true;

    this.computer = [];
    this.user = [];

    this.clearStatus();
  }

  clearStatus() {
    this.status = {
      strike: 0,
      ball: 0,
      out: 0,
    };
  }

  async play() {
    while (this.isPlaying) {
      if (this.isCorrect) this.computer = this.getComputerNumbers();
    }
  }

  getComputerNumbers() {
    const MIN = 1;
    const MAX = 9;
    const NUMBERS = [];

    while (NUMBERS.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(MIN, MAX);

      if (!NUMBERS.includes(NUMBER)) NUMBERS.push(NUMBER);
    }

    return NUMBERS;
  }
}

const app = new App();
app.play();

export default App;
