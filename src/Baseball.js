import Computer from "./Computer.js";
import User from "./User.js";
import ConsoleUtil from "./ConsoleUtil.js";
import MESSAGE from "./constant/MESSAGE.js";
import NUMBER from "./constant/NUMBER.js";

class Baseball {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.isCorrectAnswer = false;
    this.consoleUtils = new ConsoleUtil();
  }

  async play() {
    this.startGame();

    while (!this.isCorrectAnswer) {
      await this.playUntilUserFindComputer();
    }
  }

  startGame() {
    this.consoleUtils.print(MESSAGE.START_GAME);
    this.computerNumbers = new Computer().selectedNumberArray;
  }

  async playUntilUserFindComputer() {
    this.userNumbers = await new User().inputNumberArray;

    let judgeResult = this.calculateResult(
      this.computerNumbers,
      this.userNumbers
    );

    this.createJudgeMessage(judgeResult);
    this.isCorrectAnswer = this.isThreeStrike(judgeResult.strikeCount);
  }

  calculateResult(computer, user) {
    let strikeCount = this.judgeStrike(computer, user);
    let ballCount = this.judgeBall(computer, user);

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
    if (strikeCount === 3)
      return this.consoleUtils.print(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );

    if (strikeCount === 0 && ballCount === 0)
      return this.consoleUtils.print("낫싱");

    if (strikeCount === 0) return this.consoleUtils.print(`${ballCount}볼`);

    if (ballCount === 0)
      return this.consoleUtils.print(`${strikeCount}스트라이크`);

    return this.consoleUtils.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }

  isThreeStrike(strikeCount) {
    return strikeCount === 3;
  }
}

export default Baseball;
