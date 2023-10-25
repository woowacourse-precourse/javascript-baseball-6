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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isPlaying) {
      if (this.isCorrect) this.computer = this.getComputerNumbers();
      this.user = await this.getUserNumbers();

      this.isCorrect = this.compareNumbers();

      console.log(
        `STRIKE : ${this.status.strike}, BALL : ${this.status.ball}, OUT : ${this.status.out}`
      );
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

  async getUserNumbers() {
    const NUMBERS = [];

    const INPUT = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    //
    if (INPUT.length !== 3) throw new Error("[ERROR]");

    INPUT.split("").forEach((e) => {
      if (NUMBERS.includes(e)) throw new Error("[ERROR]");

      NUMBERS.push(e);
    });

    return NUMBERS;
  }

  compareNumbers() {
    for (let i = 0; i < this.user.length; i++) {
      const USER = this.user[i];
      const COMPUTER = this.computer[i];

      this.clearStatus();

      if (USER === COMPUTER) {
        this.status.strike++;
      } else if (this.computer.includes(USER)) {
        this.status.ball++;
      } else {
        this.status.out++;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
