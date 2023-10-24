import { GUIDE_MESSAGES, RESTART_GAME_NUMBERS } from '../../constants/index.js';
import Opponent from '../opponent/index.js';
import ViewInput from '../view/viewInput.js';
import ViewOutput from '../view/viewOutput.js';
import {
  numberSetValidator,
  playAgainNumberValidator,
} from '../utils/inputValidator.js';

class Player {
  /**
   * 유저가 입력한 서로 다른 3자리 수를 담은 배열
   * @type {[number, number, number]}
   */
  #playerNumberSet = [];

  async startGame() {
    this.opponent = new Opponent();
    await this.#getPlayerNumberSet();
  }

  async #getPlayerNumberSet() {
    /**
     * @type {string}
     */
    const playerInput = await ViewInput.getPlayerInput(GUIDE_MESSAGES.INPUT);
    numberSetValidator(playerInput);
    this.#handleNumberSet(playerInput);
  }

  /**
   * 🧑‍🚀 Player-3: playerInput을 [number, number, number]와 같은 number[] type으로 변환
   * @param {string} playerInput
   */
  #handleNumberSet(playerInput) {
    this.#playerNumberSet = playerInput.split('').map(Number);
    this.#requestBallCount();
  }

  // 🧑‍🚀 Player-4: 👾상대방의 checkBallCount()를 통해 플레이어의 input에 대한 볼카운트를 계산한다.
  #requestBallCount() {
    const [ballCountMessage, strike] = this.opponent.checkBallCount(
      this.#playerNumberSet
    );
    ViewOutput.printMessage(ballCountMessage);

    if (strike === 3) this.#checkRestartGame();
    else this.#getPlayerNumberSet();
  }

  /**
   * 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
   * @returns
   */
  async #checkRestartGame() {
    ViewOutput.printMessage(GUIDE_MESSAGES.PLAYER_WIN);

    /**
     * @type {string}
     */
    const playerInput = await ViewInput.getPlayerInput(
      GUIDE_MESSAGES.RESTART_GAME
    );

    playAgainNumberValidator(playerInput);

    if (playerInput === RESTART_GAME_NUMBERS.RESTART) this.startGame();
    if (playerInput === RESTART_GAME_NUMBERS.END)
      ViewOutput.printMessage(GUIDE_MESSAGES.END);
  }
}

export default Player;
