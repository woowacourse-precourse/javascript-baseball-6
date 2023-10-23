import { MESSAGE } from "./constant/MESSAGE.js";
import NUMBER from "./constant/NUMBER.js";
import { Console } from "@woowacourse/mission-utils";

class Baseball {
  constructor(computer, user) {
    this.computer = computer;
    this.user = user;
    this.isCorrectAnswer = false;
  }

  async play() {
    this.startGame();
    while (!this.isCorrectAnswer) {
      await this.getUserInputAndCompareToComputer();
    }
    return false;
  }

  startGame() {
    this.isCorrectAnswer = false;
    this.computer.createNumberArray();
  }

  async getUserInputAndCompareToComputer() {
    await this.user.getValidatedNumberArray();

    const judgeResult = this.calculateResult(
      this.computer.numberArray,
      this.user.numberArray
    );

    this.createJudgeMessage(judgeResult);
    this.isCorrectAnswer = this.isGameFinished(judgeResult.strikeCount);
  }

  calculateResult(computer, user) {
    const strikeCount = this.judgeStrike(computer, user);
    const ballCount = this.judgeBall(computer, user);

    return { strikeCount, ballCount };
  }

  judgeStrike(arrayX, arrayY) {
    let strikeCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX[i] === arrayY[i]) strikeCount++;
    }
    return strikeCount;
  }

  judgeBall(arrayX, arrayY) {
    let ballCount = 0;
    for (let i = 0; i < NUMBER.LENGTH; i++) {
      if (arrayX.includes(arrayY[i]) && arrayX[i] !== arrayY[i]) ballCount++;
    }
    return ballCount;
  }

  createJudgeMessage({ strikeCount, ballCount }) {
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
