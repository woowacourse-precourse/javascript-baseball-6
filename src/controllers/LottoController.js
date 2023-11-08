import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import { handleException } from '../utils/handleExeption.js';

class LottoController {
  #inputView;
  #outputView;
  #lottoMachine;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async playGame() {
    await handleException(async () => await this.#generateLottoMachine());

    await this.#lottoMachine.issueLotto();
    this.#outputView.printPurchaseResult(this.#lottoMachine.purchaseDTO);

    await handleException(async () => await this.#generateWinningLotto());

    const results = await this.#lottoMachine.getResults();
    this.#outputView.printGameResult(results);
  }

  async #generateLottoMachine() {
    const cost = await this.#inputView.getCost();
    this.#lottoMachine = new LottoMachine(cost);
  }

  async #generateWinningLotto() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    const bonusNumber = await this.#inputView.getBonusNumber();

    this.#lottoMachine.issueWinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoController;
