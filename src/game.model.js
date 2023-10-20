import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class Game {
  constructor() {
    this.STIRKE = 0;
    this.BALL = 0;
    this.GAMEMODE = 1;
    this.computerNumber = [];
    this.userNumber = [];
    this.startText();
  }

  startText() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerNumberSet() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerNumber = randomNumber;
  }

  async userNumberSet() {
    this.userNumber = [];
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    for (let i = 0; i < 3; i++) {
      if (!+userInput) {
        throw error;
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
      } else if (this.userNumber.includes(computerNumber[i])) {
        this.BALL++;
      }
    }
  }

  result() {
    if (this.STRIKE && this.BALL) {
      Console.print(`${this.BALL}볼 ${this.STRIKE}스트라이크`);
    } else if (STIRKE) {
      Console.print(`${this.STRIKE}스트라이크`);
    } else if (BALL) {
      Console.print(`${this.BALL}볼`);
    } else {
      Console.print(`낫싱`);
    }
  }

  end() {
    if (this.STIRKE == 3) {
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
  }

  restart() {
    if (this.STRIKE == 3) {
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (answer) => {
          this.GAMEMODE = +answer;
        }
      );
    }
  }
}

export default Game;
