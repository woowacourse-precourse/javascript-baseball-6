import { OutputView } from '../src/View/OutputView.js';
import Computer from './Computer.js';
import { InputView } from './View/InputView.js';
import { Console } from '@woowacourse/mission-utils';
class Game {
  #correctNum;
  #inputNum = [];
  #ball = 0;
  #strike = 0;
  computer = new Computer();
  retry = 1;

  async playGame() {
    this.#correctNum = this.computer.getRandomNum();
    while (this.#strike != 3 && this.retry != 2) {
      this.#inputNum = await InputView.readNum();
      this.getBall();
      this.getStrike();
      await this.printResult();
      this.resetNum();
    }
  }

  getBall() {
    this.#correctNum.map((e) => {
      if (this.#inputNum.includes(e)) {
        this.#ball += 1;
      }
    });
  }
  getStrike() {
    this.#correctNum.map((e, i) => {
      if (this.#inputNum[i] == e) {
        this.#ball -= 1;
        this.#strike += 1;
      }
    });
  }
  async printResult() {
    if (this.#ball != 0 && this.#strike != 0)
      OutputView.printResult(this.#ball, this.#strike);
    else if (this.#ball == 0 && this.#strike == 0) Console.print('낫싱');
    else if (this.#ball == 0) OutputView.printStrike(this.#strike);
    else if (this.#strike == 0) OutputView.printBall(this.#ball);

    if (this.#strike == 3) {
      OutputView.printSuccess();
      await this.getRetry();
    }
  }

  resetNum() {
    this.#ball = 0;
    this.#strike = 0;
  }

  async getRetry() {
    const input = await InputView.readRetry();
    if (input == '1') {
      this.retry = 1;
      this.#correctNum = this.computer.getRandomNum();
    } else if (input == '2') {
      this.retry = 2;
    }
  }

  async gameStart() {
    OutputView.printGameStart();
    await this.playGame();
  }
}
export default Game;
