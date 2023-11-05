import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoMachine;

  async runMachine() {
    await this.#purchaseLotto();

    const machineDTO = await this.#issueLottos();
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

  async #issueLottos() {
    while (!this.#lottoMachine.isIssueOver) {
      await this.#lottoMachine.issueLotto();
    }
    return this.#lottoMachine.DTO;
  }
}

export default LottoController;
