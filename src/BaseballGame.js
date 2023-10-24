import Computer from './Computer';
import User from './User';
import { Console, Random } from '@woowacourse/mission-utils';

export default class BaseballGame {
  #ballCount;
  #strikeCount;
  #computer;
  #user;
  constructor() {
    this.#computer = new Computer();
    this.#user = new User();
  }

  async gameStart() {
    this.#ballCount = 0;
    this.#strikeCount = 0;
    this.#computer.setRandomThreeNummber();

    while (this.#strikeCount !== 3) {
      this.#ballCount = 0;
      this.#strikeCount = 0;
      await this.#user
        .setThreeNummber()
        .then(() => {
          this.compareNumber();
        })
        .then(() => {
          this.printCount();
        })
        .catch((error) => {
          throw new Error('[ERROR]');
        });
    }
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  compareNumber() {
    const computerNumberArray = this.#computer.getRandomThreeNummber();
    const userNumberArray = this.#user.getThreeNummber();
    computerNumberArray.forEach((computerNumber, computerIdx) => {
      userNumberArray.forEach((userNumber, userIdx) => {
        if (userNumber === computerNumber && userIdx === computerIdx) {
          this.#strikeCount++;
        } else if (userNumber === computerNumber) {
          this.#ballCount++;
        }
      });
    });
  }

  printCount() {
    if (this.#ballCount === 0 && this.#strikeCount === 0) {
      Console.print('낫싱');
    } else if (this.#ballCount !== 0 && this.#strikeCount === 0) {
      Console.print(`${this.#ballCount}볼`);
    } else if (this.#strikeCount !== 0 && this.#ballCount === 0) {
      Console.print(`${this.#strikeCount}스트라이크`);
    } else {
      Console.print(`${this.#ballCount}볼 ${this.#strikeCount}스트라이크`);
    }
  }

  async retry() {
    try {
      const number = await Console.readLineAsync(
        '숫자를 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
      );
      if (number === '1' || number === '2') {
        return number;
      }
      throw new Error('[ERROR]');
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}
