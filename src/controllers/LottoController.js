import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoMachine;

  async runMachine() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    while (true) {
      try {
        const cost = await InputView.readUserInput(MESSAGE.inputs.COST);
        this.#lottoMachine = new LottoMachine(cost);
        break;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default LottoController;
