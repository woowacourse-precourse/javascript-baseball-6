import { Computer } from './Model/Computer.js';
import { answerGenerator } from './utils/answerGenerator.js';

export class BaseballGame {
  #computer;

  constructor() {
    this.#setAnswer();
  }

  #setAnswer() {
    const answerNumber = answerGenerator();

    this.#computer = new Computer(answerNumber);
  }

  compareNumber(userNumber) {
    return this.#computer.compareNumber(userNumber);
  }
}
