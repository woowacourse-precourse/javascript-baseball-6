import { Random } from "@woowacourse/mission-utils";

class AnswerManager {
  static #instance = null;

  constructor() {
    this.ANSWER_LENGTH = 3;
    this.answer = "";
  }

  static getInstance() {
    if (!this.#instance) this.#instance = new AnswerManager();
    return this.#instance;
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
}

export default AnswerManager;
