import { Console, Random } from "@woowacourse/mission-utils";
import IOManager from "./IOManager.js";

class App {
  constructor() {
    this.ANSWER_LENGTH = 3;
    this.answer = "";

    this.ioManager = IOManager.getInstance();
  }

  setAnswer() {
    this.answer = "";
    for (let i = 0; i < this.ANSWER_LENGTH; i++) {
      this.answer += this.generateRandomNonZeroDigit();
    }
  }

  getStrikeCount(number) {
    let count = 0;

    for (const idx in number) {
      if (this.isSameIndexWithAnswer(idx, number)) count++;
    }

    return count;
  }

  getBallCount(number, strikeCount) {
    let count = 0;

    for (const eachNumber of number) {
      if (this.isAnswerIncludes(eachNumber)) count++;
    }

    return count - strikeCount;
  }

  getJudgedCountsFor(number) {
    const strikeCount = this.getStrikeCount(number);
    const ballCount = this.getBallCount(number, strikeCount);
    return { strikeCount, ballCount };
  }

  generateRandomNonZeroDigit() {
    return Random.pickNumberInRange(1, 9).toString();
  }

  isSameIndexWithAnswer(idx, number) {
    return this.answer[idx] === number[idx];
  }

  isAnswerIncludes(number) {
    return this.answer.includes(number);
  }

  isGameEnd(strikeCount) {
    return strikeCount === this.ANSWER_LENGTH;
  }

  async play() {
    this.ioManager.printStartMessage();

    while (true) {
      await this.playAGame();

      const wantReplay = await this.ioManager.askReplay();
      if (!wantReplay) break;
    }
  }

  async playAGame() {
    this.setAnswer();

    while (true) {
      const isGameEnd = await this.playOneRound();
      if (isGameEnd) break;
    }

    this.ioManager.printEndMessage();
  }

  async playOneRound() {
    const number = await this.ioManager.askNumber();

    const { strikeCount, ballCount } = this.getJudgedCountsFor(number);

    this.ioManager.printRoundResult({ strikeCount, ballCount });

    return this.isGameEnd(strikeCount);
  }
}

export default App;
