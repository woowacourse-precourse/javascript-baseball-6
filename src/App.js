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
  }

  startText() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerNumberSet() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  async userNumberSet() {
    this.userNumber = [];
    let userInput;
    try {
      userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!+userInput) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
    for (let i = 0; i < 3; i++) {
      this.userNumber.push(+userInput[i]);
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
    if (this.STRIKE === 3) {
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      const mode = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      this.GAMEMODE = +mode;
      if (this.GAMEMODE === 1) {
        this.computerNumberSet();
      }
    }
  }
  async play() {
    this.startText();
    this.computerNumberSet();
    while (this.GAMEMODE === 1) {
      await this.userNumberSet();
      this.numberCompare();
      this.result();
      await this.restart();
    }
  }
}

export default App;
