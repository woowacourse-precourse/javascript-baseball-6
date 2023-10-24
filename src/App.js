import { Console } from '@woowacourse/mission-utils';

import { COMMAND } from '../core/Constants';

import RandomNumber from '../core/RandomNumber';
import Baseball from '../core/Baseball';
import NumberValidation from '../Exception/NumberValidation';
import GameCondition from '../Exception/GameCondition';
import ErrorCase from '../Exception/ErrorCase';

class App {
  #exception;

  constructor() {
    this.#exception = new ErrorCase();
  }

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

      this.#exception.checkAllError(new NumberValidation(userFeedback));
      this.print(Baseball.announceGameOutcome(random, userFeedback));

      if (Baseball.isStrikeOut(random, userFeedback)) {
        await this.askUserOpinion();
        return;
      }

      await this.enterValue(random);
    } catch (error) {
      this.throwError(error);
    }
  }

  async askUserOpinion() {
    try {
      this.end();
      const ask = await Console.readLineAsync(COMMAND.ASK);

      this.#exception.checkAllError(new GameCondition(ask));
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
