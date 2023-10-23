import { Computer } from './Model/Computer.js';

export class BaseballGame {
  #computer;

  initGame() {
    this.#setAnswer();
  }

  #setAnswer() {
    const answerNumber = answerGenerator();

    this.#computer = new Computer(answerNumber);
  }

  guessNumber(userNumber) {
    return this.#computer.compareNumber(userNumber);
  }
}
