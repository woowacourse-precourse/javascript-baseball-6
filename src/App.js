import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_MESSAGE, BASEBALL_MESSAGE } from "./Messages.js";

class App {
  constructor() {
    this.computer = [];
  }

  async play() {
    MissionUtils.Console.print(GAME_MESSAGE.GAME_START);
    await this.playNumberGame();
  }

  async playNumberGame() {
    this.generateRandomNumber();
    let printResult;
    while (printResult !== BASEBALL_MESSAGE.END_GAME) {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGE.INPUT_NUMBER
      );
      if (userInput.length !== 3) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER_LENGTH);
      }

      if (Number.isNaN(Number(userInput))) {
        throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
      }

      if (new Set(userInput).size !== 3) {
        throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
      }
      printResult = this.numberBaseballResult(userInput);
      MissionUtils.Console.print(printResult);
    }
    MissionUtils.Console.print(GAME_MESSAGE.GAME_FINISH);
    await this.restartInput();
  }

  generateRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
      console.log(this.computer);
    }
  }

  numberBaseballResult(userInput) {
    const NumberArr = userInput.split("").map(Number);
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (NumberArr[i] === this.computer[j]) {
          if (i === j) strikes++;
          else balls++;
        }
      }
    }

    if (strikes === 0 && balls === 0) return BASEBALL_MESSAGE.NOTHING;
    if (strikes !== 0 && balls === 0)
      return `${strikes}${BASEBALL_MESSAGE.STRIKE}`;
    if (strikes === 0 && balls !== 0) return `${balls}${BASEBALL_MESSAGE.BALL}`;

    return `${balls}${BASEBALL_MESSAGE.BALL} ${strikes}${BASEBALL_MESSAGE.STRIKE}`;
  }

  async restartInput() {
    const restart = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.GAME_RESTART
    );
    if (restart === "1") {
      await this.playNumberGame();
    }
  }
}

export default App;

const app = new App();
app.play();
