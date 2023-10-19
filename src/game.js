import Message from './message.js';
import Opponent from './opponent.js';

export default class Game {
  #computer;
  gameOver;

  constructor() {
    this.#computer = new Opponent();
    this.gameOver = false;
  }

  start() {
    Message.printGameStart();
    this.#computer.makeNumbers();
    this.keepQnA();
  }

  async keepQnA() {
    const numbers = await Message.printEnterNumbers();

    const { strike, ball } = this.#computer.getNumbers(numbers);
    this.tellOf(strike, ball);

    if (this.gameOver) {
      this.askRegame();
    }

    if (!this.gameOver) {
      this.keepQnA();
    }
  }

  async askRegame() {
    const num = await Message.printReset();

    if (num === '1') {
      this.reset();
    }
    if (num === '2') {
      return;
    }
  }

  reset() {
    this.#computer.resetNumbers();
    this.gameOver = false;
    this.start();
  }

  tellOf(strike, ball) {
    if (strike === 3) {
      this.gameOver = true;
      Message.printGameOver();
      return;
    }

    Message.printResult(strike, ball);
  }

  end() {}
}
