import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import { ERROR_MESSAGE, GAME_STATUS } from './utils';

class BaseballGame {
  #strike = 0;
  #ball = 0;
  #isAllCorrected = false;
  #isRestarted = false;

  async play() {
    this.startGame();

    const computer = new Computer();
    const user = new User();

    while (true) {
      await user.resetNumber();

      this.createGameResult(user.getNumber(), computer.getNumber());

      if (this.#isAllCorrected) {
        await this.keepGoingGame();

        if (this.#isRestarted) {
          computer.resetNumber();
        } else {
          break;
        }
      }
    }

    this.endGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  endGame() {
    MissionUtils.Console.print('게임 종료');
  }

  async keepGoingGame() {
    try {
      const gameStatus = await MissionUtils.Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );

      if (gameStatus === GAME_STATUS.restart) {
        this.#isRestarted = true;
      } else if (gameStatus === GAME_STATUS.terminal) {
        this.#isRestarted = false;
      } else {
        throw new Error(ERROR_MESSAGE.incorrectGameStatus);
      }
    } catch (error) {
      this.#isRestarted = false;
      throw error;
    }
  }

  createGameResult(number1, number2) {
    const number1Array = number1.split('');
    const number2Array = number2.split('');

    number1Array.forEach((number, index) => {
      const indexOf = number2Array.indexOf(number);
      if (indexOf === -1) return;

      if (indexOf === index) {
        this.#strike += 1;
      } else {
        this.#ball += 1;
      }
    });

    this.#isAllCorrected = this.#strike === 3;

    let result = '';
    if (this.#strike === 0 && this.#ball === 0) {
      result = '낫싱';
    } else if (this.#strike === 0) {
      result = `${this.#ball}볼`;
    } else if (this.#ball === 0) {
      result = `${this.#strike}스트라이크`;
    } else {
      result = `${this.#ball}볼 ${this.#strike}스트라이크`;
    }

    this.#strike = 0;
    this.#ball = 0;

    MissionUtils.Console.print(result);

    if (this.#isAllCorrected) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }
}

export default BaseballGame;
