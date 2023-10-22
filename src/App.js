import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.homeRunNumber = null;
    this.userNumber = null;
    this.startInfo = "숫자 야구 게임을 시작합니다.";
    this.constants = {
      BALL: "볼",
      STRIKE: "스트라이크",
      NOTHING: "낫싱",
      HOMERUN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      RESTART_INFO: "게임을 새로 시작하려면 1, 종료하려면 2를 입력해주세요.",
    };
  }

  getRandomNumbers() {
    let result = [];
    for (let i = 0; result.length < 3; i += 1) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      result = result.filter((value) => value !== number);
      result.push(number);
    }
    this.homeRunNumber = result.join("");
  }

  getStrikeCount(homeRunNumber, userNumbers) {
    let strike = 0;
    for (let i = 0; i < 3; i += 1) {
      if (homeRunNumber[i] === userNumbers[i]) strike += 1;
    }
    return strike;
  }

  getBallCount(homeRunNumber, userNumbers) {
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (
        homeRunNumber[i] !== userNumbers[i] &&
        homeRunNumber.includes(userNumbers[i])
      )
        ball += 1;
    }

    return ball;
  }

  getResultText(strike, ball) {
    let result = "";

    if (strike === 3) {
      MissionUtils.Console.print(`3${this.constants.STRIKE}`);
      MissionUtils.Console.print(this.constants.HOMERUN);
      return;
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(this.constants.NOTHING);
    }

    if (ball > 0) {
      result += `${ball}${this.constants.BALL} `;
    }

    if (strike > 0) {
      result += `${strike}${this.constants.STRIKE}`;
    }

    MissionUtils.Console.print(result);
  }

  validateUserNumber = (number) => {
    const setNumbers = new Set(number);

    if (number.length !== setNumbers.size) {
      throw new Error("[ERROR] 숫자를 중복 입력하셨습니다.");
    }

    if (number.length !== 3) {
      throw new Error("[ERROR] 입력하신 숫자는 잘못된 형식입니다.");
    }

    return number;
  };

  async play(restartNumber) {
    await this.initializeGame(restartNumber);
    let strike, ball;

    return new Promise(async (resolve, reject) => {
      try {
        while (true) {
          await this.getUserNumber();

          strike = this.getStrikeCount(this.homeRunNumber, this.userNumber);
          ball = this.getBallCount(this.homeRunNumber, this.userNumber);
          this.getResultText(strike, ball);

          if (strike === 3) {
            await this.restartGame();
            resolve();
            break;
          }
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
        reject(error);
      }
    });
  }

  async initializeGame(restartNumber) {
    if (!restartNumber) {
      MissionUtils.Console.print(this.startInfo);
    }

    this.getRandomNumbers();
    this.userNumber = null;
  }

  async getUserNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해 주세요 : "
    );
    this.userNumber = this.validateUserNumber(inputNumber);
  }

  async getRestartNumber() {
    MissionUtils.Console.print(this.constants.RESTART_INFO);

    return await MissionUtils.Console.readLineAsync("");
  }

  async restartGame() {
    const restartNumber = await this.getRestartNumber();
    if (restartNumber !== "1" && restartNumber !== "2") {
      throw new Error("[ERROR] 입력하신 숫자는 잘못된 형식입니다.");
    }

    if (restartNumber === "1") {
      await this.play(restartNumber);
    }
  }
}

const myApp = new App();
myApp.play();

export default App;
