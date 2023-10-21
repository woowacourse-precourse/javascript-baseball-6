import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import { Computer } from '../model';
import { BaseballValidator, ExitGameCommandValidator } from '../validator';
import { InputView, OutputView } from '../views';

/**
 * 'Domain Model Layer와 View Layer와 상호작용하며 애플리케이션 구현'의 역할을 수행
 */
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
   * OutputView에 게임 시작 메시지 출력을 요청하는 메서드
   * @private
   * @returns {void}
   */
  #askPrintStartGame() {
    this.#outputView.printStartGame();
  }

  /**
   * OutputView에 컴퓨터와 플레이어의 숫자 비교 결과 출력을 요청하는 메서드
   * @param {Object} param - 스트라이크와 볼 수가 포함된 객체.
   * @param {number} param.strike - 스트라이크 수.
   * @param {number} param.ball - 볼 수.
   * @private
   * @returns {void}
   */
  #askPrintCompareResult({ strike, ball }) {
    this.#outputView.printCompareResult({ strike, ball });
  }

  /**
   * OutputView에 게임 종료 메시지 출력을 요청하는 메서드
   * @private
   * @returns {void}
   */
  #askPrintExitGame() {
    this.#outputView.printExitGame();
  }

  /**
   * 게임 시작 전 설정을 초기화하기 위한 메서드
   * @private
   * @returns {void}
   */
  #initGameSetting() {
    this.#computer = new Computer();
  }

  /**
   * 읽어온 플레이어의 숫자 입력 값을 반환하는 메서드
   * @returns {Promise<string>} - 플레이어가 입력한 숫자.
   * @private
   */
  #inputPlayerBaseball() {
    return this.#inputView.readPlayerBaseball();
  }

  /**
   * 읽어온 플레이어의 종료 명령어 값을 반환하는 메서드
   * @returns {Promise<string>} - 플레이어가 입력한 게임 종료 명령어.
   * @private
   */
  #inputExitGameCommand() {
    return this.#inputView.readExitGameCommand();
  }

  /**
   * 플레이어의 야구공을 유효성 검사 후 값을 반환하는 메서드
   * @returns {number[]} - 유효성 검사를 통과한 플레이어의 야구공
   * @private
   */
  async #askPlayerBaseball() {
    const inputPlayerBaseball = await this.#inputPlayerBaseball();
    BaseballValidator.from(inputPlayerBaseball).validateBaseball();
    return inputPlayerBaseball.split(SYMBOLS.emptyString).map(Number);
  }

  /**
   * 플레이어의 게임 종료 명령어에 대해 유효성 검사 후 값을 반환하는 메서드
   * @returns {number} - 유효성 검사를 통과한 게임 종료 명령어
   * @private
   */
  async #askExitGameCommand() {
    const inputExitGameCommand = await this.#inputExitGameCommand();
    ExitGameCommandValidator.from(inputExitGameCommand).validateExitGameCommand();
    return Number(inputExitGameCommand);
  }

  /**
   * Computer(Domain Model)로 부터 플레이어 야구공과 비교 한 결과를 요청하는 메서드
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @returns {Object} - 스트라이크와 볼 수를 포함한 객체.
   * @private
   */
  #askCompareResult(playerBaseball) {
    return this.#computer.comparePlayerBaseball(playerBaseball);
  }

  /**
   * 게임 시작 ~ 게임 종료까지의 로직을 수행하는 메서드
   * @private
   * @returns {Promise<void>}
   */
  async #processGame() {
    this.#askPrintStartGame();
    while (true) {
      const playerBaseball = await this.#askPlayerBaseball();
      const { strike, ball } = this.#askCompareResult(playerBaseball);
      this.#askPrintCompareResult({ strike, ball });
      if (strike === GAME_TERMS.baseball.digit) break;
    }
    this.#askPrintExitGame();
  }

  /**
   * 게임을 다시 시작하는 메서드
   * @private
   * @returns {void}
   */
  #restartGame() {
    this.run();
  }

  /**
   * 완전한 게임 종료 or 재시작에 대한 요청을 처리하는 메서드
   * @private
   * @returns {Promise<void>}
   */
  async #processExitGameCommand() {
    const userCommand = await this.#askExitGameCommand();
    if (userCommand === GAME_TERMS.exitGameCommand.restart) {
      this.#restartGame();
    }
  }

  /**
   * 게임 셋팅 & 게임 시작 & 게임 종료 & 종료 명령어 처리를 실행하는 메서드
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
