import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/MESSAGE.js";
import NUMBER from "./constant/NUMBER.js";

class Baseball {
  #computer;
  #user;
  #isCorrectAnswer = false;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  async playGame() {
    this.#startGame();
    while (!this.#isCorrectAnswer) {
      this.#isCorrectAnswer = await this.#userFindAnswer();
    }
    return false;
  }

  #startGame() {
    this.#isCorrectAnswer = false;
    this.#computer.setNewNumberArray();
  }

  async #userFindAnswer() {
    await this.#user.setValidatedInputArray();

    const gameResult = this.calculateResult(
      this.#computer.numberArray,
      this.#user.numberArray
    );

    this.printJudgeMessage(gameResult);
    return this.isGameFinished(gameResult.strikeCount);
  }

  calculateResult(computer, user) {
    const strikeCount = this.calculateStrike(computer, user);
    const ballCount = this.calculateBall(computer, user);

    return { strikeCount, ballCount };
  }

  calculateStrike(arrayX, arrayY) {
    let strikeCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX[i] === arrayY[i]) strikeCount++;
    }
    return strikeCount;
  }

  calculateBall(arrayX, arrayY) {
    let ballCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX.includes(arrayY[i]) && arrayX[i] !== arrayY[i]) ballCount++;
    }
    return ballCount;
  }

  printJudgeMessage({ strikeCount, ballCount }) {
    if (strikeCount === 0 && ballCount === 0)
      return Console.print(MESSAGE.NO_STRIKE_BALL);

    if (strikeCount === 0) return Console.print(MESSAGE.ONLY_BALL(ballCount));

    if (ballCount === 0) return Console.print(MESSAGE.ONLY_STRIKE(strikeCount));

    return Console.print(MESSAGE.STRIKE_AND_BALL({ ballCount, strikeCount }));
  }

  isGameFinished(strikeCount) {
    if (strikeCount !== NUMBER.LENGTH) return false;

    Console.print(MESSAGE.FINISH_GAME);
    return true;
  }
}

export default Baseball;
