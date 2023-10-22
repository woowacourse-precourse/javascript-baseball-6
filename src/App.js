import { Console } from '@woowacourse/mission-utils';

import RandomNumber from '../core/RandomNumber.js';
import Baseball from '../core/Baseball.js';
import Exception from '../Exception/Root.js';
import GameCondition from '../Exception/GameCondition.js';

class App {
  #baseball;
  #exception;

  constructor() {
    this.#baseball = Baseball;
    this.#exception = Exception;
  }

  // 주어진 문자열을 출력하는 기능
  print(message) {
    Console.print(message);
  }

  end() {
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  async play() {
    this.print('숫자 야구 게임을 시작합니다.');
    await this.enterValue(RandomNumber.createNumber());
  }

  async enterValue(random) {
    try {
      const userFeedback = await Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );

      this.#exception.checkAllException(userFeedback);
      this.print(this.#baseball.announceGameOutcome(random, userFeedback));

      if (this.#baseball.isStrikeOut(random, userFeedback)) {
        await this.askUserOpinion();
        return;
      }

      await this.enterValue(random);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  async askUserOpinion(random) {
    try {
      this.end();
      const ask = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
      );
      GameCondition.checkAllError(ask);
      this.print(ask);

      if (ask === '1') await this.enterValue(RandomNumber.createNumber());
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
