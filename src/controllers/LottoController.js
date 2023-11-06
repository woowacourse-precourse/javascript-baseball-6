import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #inputView;
  #outputView;
  #lottoMachine;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async runLottoProgram() {
    await this.#purchaseLotto();

    const machineDTO = await this.#genLottoTickets();
    this.#outputView.printPurchaseResult(machineDTO);
  }

  async #purchaseLotto() {
    while (true) {
      try {
        const cost = await this.#inputView.getCost();
        this.#lottoMachine = new LottoMachine(cost);

        break;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  async #genLottoTickets() {
    while (!this.#lottoMachine.isIssueOver()) {
      await this.#lottoMachine.issueLotto();
    }
    return this.#lottoMachine.DTO;
  }
}

export default LottoController;
