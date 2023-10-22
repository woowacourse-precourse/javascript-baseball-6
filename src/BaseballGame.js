import Computer from './Computer.js';
import User from './User.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default class BaseballGame {
  #ballCount;
  #strikeCount;
  #flage;
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  async gameStart() {
    this.#ballCount = 0;
    this.#strikeCount = 0;
    this.#flage = 0;
    this.computer.setRandomThreeNummber();

    while (this.#strikeCount !== 3) {
      if (this.#flage === 1) {
        throw new `[ERROR]`();
      }
      this.#ballCount = 0;
      this.#strikeCount = 0;
      await this.user
        .setThreeNummber()
        .then(() => this.comparNumber())
        .catch((error) => {
          this.#flage = 1;
        });
    }
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  comparNumber() {
    const computerNumberArray = this.computer.getRandomThreeNummber();
    const userNumberArray = this.user.getThreeNummber();
    computerNumberArray.forEach((computerNumber, computerIdx) => {
      userNumberArray.forEach((userNumber, userIdx) => {
        if (userNumber === computerNumber && userIdx === computerIdx) {
          this.#strikeCount++;
        } else if (userNumber === computerNumber) {
          this.#ballCount++;
        }
      });
    });
    this.printCount();
  }
  printCount() {
    if (this.#ballCount === 0 && this.#strikeCount === 0) {
      MissionUtils.Console.print(`낫싱`);
    } else if (this.#ballCount !== 0 && this.#strikeCount === 0) {
      MissionUtils.Console.print(`${this.#ballCount}볼`);
    } else if (this.#strikeCount !== 0 && this.#ballCount === 0) {
      MissionUtils.Console.print(`${this.#strikeCount}스트라이크 `);
    } else {
      MissionUtils.Console.print(
        `${this.#ballCount}볼 ${this.#strikeCount}스트라이크`
      );
    }
  }
  async retry() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      return parseInt(number, 10);
    } catch (error) {
      // reject 되는 경우
      re;
    }
  }
}
