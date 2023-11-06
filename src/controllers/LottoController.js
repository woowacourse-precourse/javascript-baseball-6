import { Console } from '@woowacourse/mission-utils';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import WinningLotto from '../models/WinningLotto.js';

class LottoController {
  #inputView;
  #outputView;
  #lottoMachine;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async playGame() {
    await this.#initLottoMachine();

    const machineDTO = await this.#generateLottos();
    this.#outputView.printPurchaseResult(machineDTO);

    const winningLottoDTO = await this.#generateWinningLotto();
  }

  async #initLottoMachine() {
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

  async #generateLottos() {
    while (!this.#lottoMachine.isIssueOver()) {
      await this.#lottoMachine.issueLotto();
    }

    return this.#lottoMachine.DTO;
  }

  async #generateWinningLotto() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    const bonusNumber = await this.#inputView.getBonusNumber();

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    return winningLotto.DTO;
  }
}

export default LottoController;
