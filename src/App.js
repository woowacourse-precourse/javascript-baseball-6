import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.numberPlayer = "";
    this.numberRandom = "";
    this.gameResult = {};
    this.compare = {
      isStrike: (num, idx) => this.numberRandom[idx] === num,
      isBall: (num, idx) =>
        this.numberRandom[idx] !== num && this.numberRandom.includes(num),
    };
    this.listCheck = {
      isLength: (answer) => answer.length === 3,
      isNegative: (answer) => Math.sign(answer) === -1,
      isType: (answer) => Number.isInteger(+answer),
    };
  }

  printMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeRandomNumber() {
    while (this.numberRandom.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.numberRandom.includes(number)) {
        this.numberRandom += `${number}`;
      }
    }
    this.numberRandom = [...this.numberRandom];
    Console.print(this.numberRandom);
  }

  async getNumber() {
    try {
      let answer = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (
        !(answer.length === 3) ||
        Math.sign(answer) === -1 ||
        !Number.isInteger(+answer)
      ) {
        throw new Error(": 잘못 입력하셨습니다.");
      }
      this.numberPlayer = [...answer];
      this.gameResult = {};

      this.getResult();
      this.printResult();
    } catch ({ name, message }) {
      // reject 되는 경우
      Console.print(`[${name}]${message}`);
      this.getNumber();
    }
  }

  getResult() {
    const { gameResult } = this;
    const { isStrike, isBall } = this.compare;

    this.numberPlayer.forEach((num, idx) => {
      if (isStrike(num, idx)) gameResult.strike = gameResult.strike + 1 || 1;
      if (isBall(num, idx)) gameResult.ball = gameResult.ball + 1 || 1;
    });
  }

  printResult() {
    const { strike, ball } = this.gameResult;

    const ballMessage = `${ball ? `${ball}볼 ` : ""}`;
    const strikeMessage = `${strike ? `${strike}스트라이크 ` : ""}`;
    const nothingMessage = `${!strike && !ball ? "낫싱" : ""}`;

    Console.print(ballMessage + strikeMessage + nothingMessage);
    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restart();
    } else this.getNumber();
  }

  async restart() {
    let maxAttempts = 3;

    async function getUserChoice() {
      return await Console.readLineAsync(
        `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. (${maxAttempts}번 남았습니다.)\n`
      );
    }

    try {
      const answer = await getUserChoice();

      if (answer !== "1" && answer !== "2") {
        throw new Error("잘못된 값을 입력하셨습니다.");
      }

      if (answer === "1") {
        this.numberRandom = "";
        this.play();
      } else if (answer === "2") {
        Console.print(`${answer}번 선택하셨습니다. 종료하겠습니다.`);
        return;
      }
    } catch ({ name, message }) {
      Console.print(`[${name}]${message}`);
      maxAttempts--;

      if (maxAttempts <= 0) {
        Console.print("최대 시도 횟수를 초과하였습니다. 게임을 종료합니다.");
        return;
      }

      await restart();
    }
  }

  get get_numberPlayer() {
    return this.numberPlayer;
  }

  get get_numberRandom() {
    return this.numberRandom;
  }

  async play() {
    this.printMessage();
    this.start();
  }

  start() {
    this.makeRandomNumber();
    this.getNumber();
  }
}

const app = new App();
app.play();

export default App;
