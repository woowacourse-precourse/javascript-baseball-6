import BaseballModel from '../model/index.js';
import { InputView, OutputView } from '../view/index.js';

class BaseBallController {
  /** * @type {string} */
  static RETRY = '1';

  /** * @type {number} */
  static END_POINT = 3;

  constructor() {
    OutputView.printStart();
  }

  /**
   * @async
   * @returns {Promise<void>}
   */
  async run() {
    const gameNumbers = BaseballModel.generateGameNumbers();
    await BaseBallController.#guessNumber(gameNumbers);
    const userAnswer = await InputView.readGameCommand();

    if (userAnswer === BaseBallController.RETRY) {
      this.run();
    }
  }

  /**
   * no-await-in-loop
   * When not to use it
   * 1. 한 번의 반복에서 출력물이 다른 반복의 입력으로 사용되는 경우
   * 2. 비동기 작업을 다시 시도하기 위해 사용 사용되는 경우
   * 3. 코드가 과도한 수의 요청을 보내지 않도록 하는 데 사용하는 경우
   * 1~3 경우에 해당되는 경우 루프 내에서 await을 사용하는 것이 합리적이며, 표준 ESlint 비활설화 주석을 통해
   * 이 규칙을 비활성화하는 것이 권장 뒵니다.
   * https://eslint.org/docs/latest/rules/no-await-in-loop
   */

  /**
   * @private
   * @param {number[]} gameNumbers
   *  @returns {Promise<void>}
   */
  static async #guessNumber(gameNumbers) {
    while (true) {
      // eslint-disable-next-line
      const userNumbers = await InputView.readGameNumbers();
      const score = BaseballModel.compareUserWithComputerNumbers(userNumbers, gameNumbers);

      OutputView.printHint(score);
      if (score.strike === this.END_POINT) {
        OutputView.printSuccess();
        break;
      }
    }
  }
}

export default BaseBallController;
