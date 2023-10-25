import { Computer } from './Model/Computer.js';
import { generateAnswer } from './utils/baseballNumberUtils.js';

export class BaseballGame {
  #computer;

  constructor() {
    this.#setAnswer();
  }

  #setAnswer() {
    const answerNumber = generateAnswer();

    this.#computer = new Computer(answerNumber);
  }

  compareNumber(userNumber) {
    return this.#computer.compareNumber(userNumber);
  }
}
