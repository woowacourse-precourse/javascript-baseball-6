import { Console } from '@woowacourse/mission-utils';

import { COMMAND } from '../core/Constants';

import RandomNumber from '../core/RandomNumber';
import Baseball from '../core/Baseball';
import Exception from '../Exception/Root';
import GameCondition from '../Exception/GameCondition';

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
    this.print(COMMAND.END);
  }

  throwError(error) {
    throw new Error(`[ERROR] ${error}`);
  }

  async play() {
    this.print(COMMAND.START);
    await this.enterValue(RandomNumber.createNumber());
  }

  async enterValue(random) {
    try {
      const userFeedback = await Console.readLineAsync(COMMAND.RESTART);

      this.#exception.checkAllException(userFeedback);
      this.print(this.#baseball.announceGameOutcome(random, userFeedback));

      if (this.#baseball.isStrikeOut(random, userFeedback)) {
        await this.askUserOpinion();
        return;
      }

      await this.enterValue(random);
    } catch (error) {
      this.throwError(error);
    }
  }

  async askUserOpinion(random) {
    try {
      this.end();
      const ask = await Console.readLineAsync(COMMAND.ASK);
      GameCondition.checkAllError(ask);
      this.print(ask);

      if (ask === COMMAND.RESTART) {
        await this.enterValue(RandomNumber.createNumber());
      }
    } catch (error) {
      this.throwError(error);
    }
  }
}

export default App;
