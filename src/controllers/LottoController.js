import { Console } from '@woowacourse/mission-utils';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import WinningLotto from '../models/WinningLotto.js';
import { handleException } from '../utils/handleExeption.js';

class LottoController {
  #inputView;
  #outputView;
  #lottoMachine;
  #winningLotto;
  #prize;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async playGame() {
    await handleException(async () => await this.#generateLottoMachine());

    while (!this.#lottoMachine.isIssueOver()) {
      await this.#lottoMachine.issueLotto();
    }
    this.#outputView.printPurchaseResult(this.#lottoMachine.DTO);

    await handleException(async () => await this.#generateWinningLotto());

    const winningLottoDTO = this.#winningLotto.DTO;
  }

  async #generateLottoMachine() {
    const cost = await this.#inputView.getCost();
    this.#lottoMachine = new LottoMachine(cost);
  }

  async #generateWinningLotto() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    const bonusNumber = await this.#inputView.getBonusNumber();

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoController;
