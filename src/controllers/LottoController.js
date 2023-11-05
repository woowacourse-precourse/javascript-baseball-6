import MESSAGE from '../constants/message.js';
import LottoMachine from '../models/LottoMachine.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async runMachine() {
    const cost = await InputView.readUserInput(MESSAGE.inputs.COST);
  }
}

export default LottoController;
