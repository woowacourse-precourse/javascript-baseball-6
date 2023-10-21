import { MissionUtils } from "@woowacourse/mission-utils";

const console = MissionUtils.Console;
const random = MissionUtils.Random;

class App {
  constructor() {
    this.STIRKE = 0;
    this.BALL = 0;
    this.GAMEMODE = 1;
    this.computerNumber = [];
    this.userNumber = [];
  }

  startText() {
    console.print("숫자 야구 게임을 시작합니다.");
  }

  computerNumberSet() {
    const randomNumber = random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerNumber = randomNumber;
  }

  async userNumberSet() {
    this.userNumber = [];
    const userInput = await console.readLineAsync("숫자를 입력해주세요 : ");
    for (let i = 0; i < 3; i++) {
      if (!+userInput) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      this.userNumber.push(userInput[i]);
    }
  }

  numberCompare() {
    this.STIRKE = 0;
    this.BALL = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === this.userNumber[i]) {
        this.STRIKE++;
      } else if (this.userNumber.includes(this.computerNumber[i])) {
        this.BALL++;
      }
    }
  }

  result() {
    if (this.STRIKE && this.BALL) {
      console.print(`${this.BALL}볼 ${this.STRIKE}스트라이크`);
    } else if (this.STIRKE) {
      console.print(`${this.STRIKE}스트라이크`);
    } else if (this.BALL) {
      console.print(`${this.BALL}볼`);
    } else {
      console.print(`낫싱`);
    }
  }

  end() {
    if (this.STIRKE == 3) {
      console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
  }

  restart() {
    if (this.STRIKE == 3) {
      console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (answer) => {
          this.GAMEMODE = +answer;
        }
      );
    }
  }
  async play() {
    while(this.GAMEMODE === 1) {
      this.startText();
      this.computerNumberSet();
      this.userNumberSet();
      this.numberCompare();
      this.result();
      this.end();
      this.restart();
    }
    
  }
}

export default App;
