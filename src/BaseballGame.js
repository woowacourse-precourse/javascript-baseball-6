import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import { DIGIT_COUNT, ERROR_MESSAGE, GAME_STATUS } from './utils/index.js';

class BaseballGame {
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
    const { strike, ball } = this.createStrikeAndBall(number1, number2);
    const resultMessage = this.createResultMessage({ strike, ball });

    MissionUtils.Console.print(resultMessage);

    this.#isAllCorrected = strike === DIGIT_COUNT;
    if (this.#isAllCorrected) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }

  createStrikeAndBall(number1, number2) {
    let strike = 0;
    let ball = 0;
    const number1Array = number1.split('');
    const number2Array = number2.split('');

    number1Array.forEach((number, index) => {
      const indexOf = number2Array.indexOf(number);
      if (indexOf === -1) return;

      if (indexOf === index) {
        strike += 1;
      } else {
        ball += 1;
      }
    });

    return { strike, ball };
  }

  createResultMessage({ strike, ball }) {
    let result = '';

    if (strike === 0 && ball === 0) {
      result = '낫싱';
    } else if (strike === 0) {
      result = `${ball}볼`;
    } else if (ball === 0) {
      result = `${strike}스트라이크`;
    } else {
      result = `${ball}볼 ${strike}스트라이크`;
    }
    return result;
  }
}

export default BaseballGame;
