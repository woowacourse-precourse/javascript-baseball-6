import { Console, Random } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";

class BaseballGame {
  gameRestart = "1";
  gameExit = "2";

  constructor({ minNumber, maxNumber, numberLength }) {
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
    this.numberLength = numberLength;
  }

  async start() {
    try {
      this.answerNumber = this.setAnswerNumber();
      Console.print(Messages.START);
      await this.getInputNumber();
    } catch (error) {
      throw error;
    }
  }

  setAnswerNumber() {
    const answerNumber = [];
    while (answerNumber.length < this.numberLength) {
      const number = Random.pickNumberInRange(this.minNumber, this.maxNumber);
      if (!answerNumber.includes(number)) {
        answerNumber.push(number);
      }
    }
    return answerNumber;
  }

  async getInputNumber() {
    const inputNumber = await Console.readLineAsync(Messages.GET_INPUT);
    const [isVaild, message] = this.isVaildInput(inputNumber);
    try {
      if (!isVaild) {
        throw new Error(message);
      }
      this.printScore(inputNumber);
    } catch (error) {
      throw error;
    }
  }

  async printScore(number) {
    const score = this.checkScore(number);
    Console.print(score);
    if (score === `${this.numberLength}스트라이크`) {
      Console.print(Messages.ALL_STRIKE);
      await this.chooseRestartOrExit();
    } else {
      await this.getInputNumber();
    }
  }

  checkScore(number) {
    const inputNumber = number.split("").map((el) => Number(el));
    let score = {
      ball: 0,
      strike: 0,
    };

    for (let i = 0; i < inputNumber.length; i++) {
      if (inputNumber[i] === this.answerNumber[i]) {
        score.strike++;
      } else if (this.answerNumber.includes(inputNumber[i])) {
        score.ball++;
      }
    }

    if (score.ball === 0 && score.strike === 0) {
      return `낫싱`;
    }
    if (score.ball === 0) {
      return `${score.strike}스트라이크`;
    }
    if (score.strike === 0) {
      return `${score.ball}볼`;
    }
    return `${score.ball}볼 ${score.strike}스트라이크`;
  }

  async chooseRestartOrExit() {
    try {
      const userChoice = await Console.readLineAsync(Messages.RESTART_OR_EXIT);
      if (userChoice === this.gameExit) {
        Console.print(Messages.GAME_OVER);
        return;
      } else if (userChoice === this.gameRestart) {
        this.answerNumber = this.setAnswerNumber();
        this.getInputNumber();
      } else {
        throw new Error(Messages.ERROR.CHOOSE_ONE_OR_TWO);
      }
    } catch (error) {
      throw error;
    }
  }

  isVaildInput(number) {
    if (number.length === 0) {
      return [false, Messages.ERROR.INVALID_EMPTY];
    }
    if (!/^[0-9]+$/.test(number)) {
      return [false, Messages.ERROR.INVALID_INPUT];
    }
    if (number.length !== this.numberLength) {
      return [false, Messages.ERROR.INVALID_LENGTH];
    }
    if (new Set([...number]).size < this.numberLength) {
      return [false, Messages.ERROR.INVALID_ENTER_DUPLICATE];
    }
    return [true, ""];
  }
}

export default BaseballGame;
