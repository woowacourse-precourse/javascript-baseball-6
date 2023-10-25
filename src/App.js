import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { error } from "./error.js";
import { constant } from "./constant.js";

class App {
  constructor(
    input,
    answer,
    strikeCount,
    ballCount,
    proceeding = true,
    restart = false
  ) {
    this.input = input;
    this.answer = answer;
    this.strikeCount = strikeCount;
    this.ballCount = ballCount;
    this.proceeding = proceeding;
    this.restart = restart;
  }

  async play() {
    Console.print(constant.GAME_START);
    await this.getNumber();
    while (this.proceeding) {
      this.restart && (await this.getNumber());
      await this.inputNumber();
    }
  }

  async getNumber() {
    const answerSet = new Set();

    while (answerSet.size !== 3) {
      answerSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    this.answer = Array.from(answerSet).join("");
    this.restart = false;
    return this.answer;
  }

  async inputNumber() {
    const number = await Console.readLineAsync(constant.INPUT_NUMBER_MSG);
    this.strikeCount = 0;
    this.ballCount = 0;
    await this.settingNumber(number);
    if (!number) {
      throw new Error(constant.ERROR.INPUT_VALUE);
    }
  }

  async settingNumber(number) {
    error(number);
    this.input = number;
    await this.calculate();
  }

  async calculate() {
    const inputArr = this.input.split("");
    const answerArr = this.answer.split("");
    await this.strike(inputArr, answerArr);
    await this.ball(inputArr, answerArr);
    await this.consoleOutput(this.strikeCount, this.ballCount);
  }

  async strike(inputArr, answerArr) {
    const isStrike = answerArr.map((item, index) => {
      return item === inputArr[index];
    });
    this.strikeCount = isStrike.filter((x) => x).length;
    return this.strikeCount;
  }

  async ball(inputArr, answerArr) {
    const isBall = answerArr.map((item, index) => {
      return inputArr.includes(item) && item !== inputArr[index];
    });

    this.ballCount = isBall.filter((x) => x).length;
    return this.ballCount;
  }

  async consoleOutput(strikeCount, ballCount) {
    const BALL = `${ballCount}볼`;
    const STRIKE = `${strikeCount}스트라이크`;
    if (!strikeCount && !ballCount) {
      Console.print("낫싱");
    }

    if (strikeCount && ballCount) {
      Console.print(`${BALL} ${STRIKE}`);
    }

    if (strikeCount && !ballCount) {
      Console.print(STRIKE);
    }

    if (!strikeCount && ballCount) {
      Console.print(BALL);
    }

    if (strikeCount === 3) {
      await Console.print(constant.CORRECT_NUMBER);
      await this.finishedGame();
    }
  }

  async finishedGame() {
    const restartChoice = await Console.readLineAsync(constant.RESTART_OPTION);
    const choice = parseInt(restartChoice);

    if (choice !== 1 && choice !== 2) {
      throw new Error(constant.ERROR.ONE_OR_TWO);
    }

    if (choice === 1) {
      this.restart = true;
    }

    if (choice === 2) {
      this.proceeding = false;
      return;
    }
  }
}

const app = new App();
app.play();

export default App;
