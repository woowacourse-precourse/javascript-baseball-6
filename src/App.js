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

      this.printMessage();

      if (this.isCorrect) await this.askRestart();
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

    return NUMBERS.map(Number);
  }

  compareNumbers() {
    this.clearStatus();

    for (let i = 0; i < this.user.length; i++) {
      const USER = this.user[i];
      const COMPUTER = this.computer[i];

      if (USER === COMPUTER) {
        this.status.strike++;
      } else if (this.computer.includes(USER)) {
        this.status.ball++;
      } else {
        this.status.out++;
      }
    }

    return this.status.strike === 3;
  }

  printMessage() {
    const STRIKE = this.status.strike;
    const BALL = this.status.ball;
    const OUT = this.status.out;
    let message = "";

    message += BALL ? `${BALL}볼 ` : "";
    message += STRIKE ? `${STRIKE}스트라이크` : "";

    if (OUT === 3) message = "낫싱";

    MissionUtils.Console.print(message);
  }

  async askRestart() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (INPUT == 1) return this.init();
    if (INPUT == 2) return this.quitGame();

    throw new Error("[ERROR]");
  }

  quitGame() {
    this.isPlaying = false;
    this.isCorrect = false;

    this.computer = [];
    this.user = [];

    this.clearStatus();

    MissionUtils.Console.print("게임 종료");
  }
}

const app = new App();
app.play();

export default App;
