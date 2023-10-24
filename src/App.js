import { INFO_MESSAGE } from "./constants/message.js";
import { MAGIC_NUM } from "./constants/magicNum.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { errorHandlingWrapper } from "./utils/errorHandlingWrapper.js";

class App {
  constructor() {
    this.printStart();
  }
  printStart() {
    Console.print(INFO_MESSAGE.START_MESSAGE);
  }

  async startNewGame() {
    try {
      const answer = this.generateRandomNum();
      await this.runGame(answer);
    } catch (error) {
      throw error;
    }
  }

  generateRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const num = Random.pickNumberInRange(1, 9, 3);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    // console.log(`generateRandomNum: `, computer);
    return computer;
  }

  async runGame(answer) {
    try {
      const userGuessInput = await this.getUserInput();
      if (this.inputValidator(userGuessInput)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      const result = this.compareNums(userGuessInput, answer);
      this.printResult(result);
      if (result.strike === MAGIC_NUM.MAX_BASEBALL_NUM) {
        return this.getRestartInput();
      } else {
        return this.runGame(answer);
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserInput() {
    try {
      return await Console.readLineAsync(INFO_MESSAGE.INPUT_NUM_MESSAGE);
    } catch (error) {
      throw error;
    }
  }

  inputValidator(userGuessInput) {
    const regExp = /^[1-9]{3}$/;
    if (!regExp.test(userGuessInput)) {
      return true;
    }

    const overlapReg = /(.)\1+/;
    if (overlapReg.test(userGuessInput)) {
      return true;
    }

    const differenceReg = /(.)\d\1/;
    if (differenceReg.test(userGuessInput)) {
      return true;
    }
    return false;
  }

  compareNums(userGuessInput, answer) {
    const count = { ball: 0, strike: 0 };
    const arrayedUserGuessInput = userGuessInput
      .split("")
      .map((num) => Number(num));
    arrayedUserGuessInput.forEach((userNum, idx) => {
      if (answer.includes(userNum) && answer.indexOf(userNum) === idx) {
        count.strike++;
      } else if (answer.includes(userNum)) {
        count.ball++;
      }
    });
    return count;
  }

  printResult({ ball, strike }) {
    if (ball || strike) {
      Console.print(
        (ball ? `${ball}볼` : "") + (strike ? `${strike}스트라이크` : "")
      );
    } else {
      Console.print(INFO_MESSAGE.NOTHING_MESSAGE);
    }
  }

  async getRestartInput() {
    try {
      Console.print(INFO_MESSAGE.RESTART_MESSAGE);
      const restartInput = await Console.readLineAsync("");
      if (this.restartValidator(restartInput)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (Number(restartInput) === MAGIC_NUM.NEW_GAME_NUM) {
        await this.startNewGame();
      }
    } catch (error) {
      throw error;
      // Console.print(error.message + "getRestartInput");
    }
  }

  restartValidator(restartInput) {
    const regExp = /^[1-2]{1}$/;
    if (!regExp.test(restartInput)) {
      return true;
    }
    return false;
  }

  async play() {
    try {
      await this.startNewGame();
    } catch (error) {
      throw new Error(error);
    }
  }
}

// const app = new App();
// app.play();

export default App;
