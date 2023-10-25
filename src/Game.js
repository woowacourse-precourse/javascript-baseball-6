import { Console, MissionUtils } from "@woowacourse/mission-utils";
import {
  NOTHING,
  STRIKE,
  BALL,
  END_OR_RESET_MESSAGE,
  END_MESSAGE,
  CORRECT_MESSAGE,
  INPUT_MESSAGE,
} from "./Constants.js";

export default class Game {
  makeAnswer() {
    let answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
  async getNumberInput() {
    let numberInput = await Console.readLineAsync(INPUT_MESSAGE);
    const result = this.validateInput(numberInput);
    if (result != "통과") throw new Error(result);
    return numberInput.split("");
  }

  checkAnswer(numberInput) {
    let strikeResult = 0;
    let ballResult = 0;
    for (let i = 0; i < this.answer.length; i++) {
      if (this.answer[i] == numberInput[i]) {
        strikeResult++;
      } else if (this.answer.includes(Number(numberInput[i]))) {
        ballResult++;
      } else {
      }
    }
    return [strikeResult, ballResult];
  }

  makeHint(strikeResult, ballResult) {
    if (strikeResult > 0 && ballResult > 0)
      Console.print(ballResult + BALL + " " + strikeResult + STRIKE);
    else if (strikeResult == 0 && ballResult > 0)
      Console.print(ballResult + BALL);
    else if (strikeResult > 0 && ballResult == 0)
      Console.print(strikeResult + STRIKE);
    else Console.print(NOTHING);
  }

  validateInput(number) {
    const inputToSet = new Set(number.split("").map(Number));
    if (number.length !== 3) return ERROR_MAKE_THREE;
    if ([...inputToSet].length !== 3) {
      return ERROR_DUPLICATE_NUMBER;
    }
    if (number.includes(" ")) return ERROR_BLANK_INPUT;
    if (Number.isNaN(number)) return ERROR_ONLY_NUMBER;

    return "통과";
  }

  async endOrReset() {
    Console.print(CORRECT_MESSAGE);
    const endMessage = await Console.readLineAsync(END_OR_RESET_MESSAGE);
    if (endMessage == 1) {
      this.answer = this.makeAnswer();
      await this.play();
    } else {
      Console.print(END_MESSAGE);
    }
  }
}
