import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import { Computer } from '../model';
import { BaseballValidator, ExitGameCommandValidator } from '../validator';
import { InputView, OutputView } from '../views';

class GameController {
  #computer;

  #inputView;

  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#computer = null;
  }

  /**
   * @private
   * @returns {void}
   */
  #restartGame() {
    this.run();
  }

  /**
   * @private
   * @returns {Promise<string>} - 플레이어가 입력한 게임 종료 명령어.
   */
  #requireInputExitGameCommand() {
    return this.#inputView.readExitGameCommand();
  }

  /**
   * @async
   * @private
   * @returns {number} - 유효성 검사를 통과한 게임 종료 명령어
   */
  async #requireExitGameCommand() {
    const inputExitGameCommand = await this.#requireInputExitGameCommand();
    ExitGameCommandValidator.from(inputExitGameCommand).validateExitGameCommand();
    return Number(inputExitGameCommand);
  }

  /**
   * @async
   * @private
   * @returns {Promise<void>}
   */
  async #processExitGameCommand() {
    const userCommand = await this.#requireExitGameCommand();
    if (userCommand === GAME_TERMS.exitGameCommand.restart) {
      this.#restartGame();
    }
  }

  /**
   * @private
   * @returns {void}
   */
  #requirePrintExitGame() {
    this.#outputView.printExitGame();
  }

  /**
   * @private
   * @param {import('../utils/jsDoc.js').CompareResult} compareResult - 스트라이크와 볼 수가 포함된 객체.
   * @returns {void}
   */
  #requirePrintCompareResult({ strike, ball }) {
    this.#outputView.printCompareResult({ strike, ball });
  }

  /**
   * @private
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @returns {import('../utils/jsDoc.js').CompareResult} - 스트라이크와 볼 수를 포함한 객체.
   */
  #requireCompareResult(playerBaseball) {
    return this.#computer.comparePlayerBaseball(playerBaseball);
  }

  /**
   * @private
   * @returns {Promise<string>} - 플레이어가 입력한 숫자(야구공).
   */
  #requireInputPlayerBaseball() {
    return this.#inputView.readPlayerBaseball();
  }

  /**
   * @async
   * @private
   * @returns {number[]} - 유효성 검사를 통과한 플레이어의 야구공
   */
  async #requirePlayerBaseball() {
    const inputPlayerBaseball = await this.#requireInputPlayerBaseball();
    BaseballValidator.from(inputPlayerBaseball).validateBaseball();
    return inputPlayerBaseball.split(SYMBOLS.emptyString).map(Number);
  }

  /**
   * @private
   * @returns {void}
   */
  #requirePrintStartGame() {
    this.#outputView.printStartGame();
  }

  /**
   * @async
   * @private
   * @returns {Promise<void>}
   */
  async #processGame() {
    this.#requirePrintStartGame();
    while (true) {
      const playerBaseball = await this.#requirePlayerBaseball();
      const { strike, ball } = this.#requireCompareResult(playerBaseball);
      this.#requirePrintCompareResult({ strike, ball });
      if (strike === GAME_TERMS.baseball.digit) break;
    }
    this.#requirePrintExitGame();
  }

  /**
   * @private
   * @returns {void}
   */
  #initGameSetting() {
    this.#computer = new Computer();
  }

  /**
   * @async
   * @public
   * @returns {Promise<void>}
   */
  async run() {
    this.#initGameSetting();
    await this.#processGame();
    await this.#processExitGameCommand();
  }
}

export default GameController;
