import { answerGenerator } from './utils/answerGenerator.js';
import { Computer } from './Model/Computer.js';

export class BaseballGame {
  #computer;
  #user;

  constructor() {
    this.#setConfig();
    this.#initGame();
  }

  #setConfig() {
    const answerNumberList = answerGenerator();
    this.#computer = new Computer(answerNumberList);
  }

  #initGame() {}
}
