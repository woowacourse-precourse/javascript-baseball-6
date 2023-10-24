import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

class Game {
  #answer;
  #number;
  #hint;

  constructor() {
    this.#answer = [];
    this.#number = [];
    this.#hint = { strike: 0, ball: 0 };
  }

  createAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#answer = computer;
  }

  createHint() {
    for (const index in this.#answer) {
      if (this.#answer[index] === this.#number[index]) {
        this.#hint.strike++;
      } else {
        for (const num of this.#number) {
          if (this.#answer[index] === num) {
            this.#hint.ball++;
          }
        }
      }
    }
  }

  async threeStrike() {
    Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const number = await Input.getGameEnd();
    if (number === '1') {
      return this.startGame();
    } else {
      return this.endGame();
    }
  }

  printResult() {
    const { strike, ball } = this.#hint;
    if (strike === 3) {
      this.threeStrike();
    } else {
      if (strike && ball) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (ball) {
        Console.print(`${ball}볼`);
      } else if (strike) {
        Console.print(`${strike}스트라이크`);
      } else {
        Console.print('낫싱');
      }
      this.progressGame();
    }
  }

  async progressGame() {
    this.#number = null;
    this.#hint = { strike: 0, ball: 0 };
    this.#number = await Input.getNumber();

    if (this.#number) {
      this.createHint();
      this.printResult();
    } else {
      this.endGame();
    }
  }

  startGame() {
    this.createAnswer();
    this.progressGame();
  }

  endGame() {
    return;
  }
}

export default Game;
