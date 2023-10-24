
import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.STRIKE = 0;
    this.BALL = 0;
    this.computerNumber = [];
    this.userNumber = [];
    this.GAMEMODE = 1;
    this.NUMBERLENGTH = 3;
    this.MINNUMBER = 1;
    this.MAXNUMBER = 9;
  }

  startText() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerNumberSet() {
    this.computerNumber = [];
    while (this.computerNumber.length < this.NUMBERLENGTH) {
      const number = Random.pickNumberInRange(this.MINNUMBER, this.MAXNUMBER);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  async userNumberSet() {
    this.userNumber = [];

    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      for (let i = 0; i < 3; i++) {
        this.userNumber.push(+userInput[i]);
      }
      this.validation(userInput);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  numberCompare() {
    this.STRIKE = 0;
    this.BALL = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === this.userNumber[i]) {
        this.STRIKE++;
      } else if (this.computerNumber.includes(this.userNumber[i])) {
        this.BALL++;
      }
    }
  }

  result() {
    if (this.STRIKE && this.BALL) {
      Console.print(`${this.BALL}볼 ${this.STRIKE}스트라이크`);
    } else if (this.STRIKE) {
      Console.print(`${this.STRIKE}스트라이크`);
    } else if (this.BALL) {
      Console.print(`${this.BALL}볼`);
    } else {
      Console.print(`낫싱`);
    }
  }

  async restart() {
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    const mode = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    this.GAMEMODE = +mode;
    if (this.GAMEMODE === 1) {
      this.computerNumberSet();
    }
  }

  validation(userInput) {
    if (userInput.length !== this.NUMBERLENGTH || !+userInput) {
      throw new Error("[ERROR] 숫자를 다시 입력하세요.");
    }
    if (!+userInput) {
      throw new Error("[ERROR] 숫자를 다시 입력하세요.");
    }
    for (let i = 0; i < 3; i++) {
      if (+userInput[i] < this.MINNUMBER || +userInput[i] > this.MAXNUMBER) {
        throw new Error("[ERROR] 숫자를 다시 입력하세요.");
      }
    }
    let uniqueNumber = new Set(this.userNumber);
    if (uniqueNumber.size !== this.NUMBERLENGTH) {
      throw new Error("[ERROR] 숫자를 다시 입력하세요.");
    }
  }

  async play() {
    this.startText();
    this.computerNumberSet();
    while (this.GAMEMODE === 1) {
      await this.userNumberSet();
      this.numberCompare();
      this.result();
      if (this.STRIKE === this.NUMBERLENGTH) {
        await this.restart();
      }
    }
  }
}

const app = new App();
app.play();
export default App;
