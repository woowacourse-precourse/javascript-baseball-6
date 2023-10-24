import { GUIDE_MESSAGES, RESTART_GAME_NUMBERS } from '../../constants/index.js';
import RandomNumSet from '../opponent/RandomNumSet.js';
import CheckBallCount from '../opponent/CheckBallCount.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Player {
  /**
   * 유저가 입력한 서로 다른 3자리 수를 담은 배열
   * @type {[number, number, number]}
   */
  #playerNumberSet;
  #playerWin;

  async startGame() {
    const opponent = new RandomNumSet();
    this.randomNumSet = opponent.getRandomNumSet();
    await this.#playGame();
    await this.#checkRestartGame();
  }

  async #playGame() {
    this.#playerWin = false;
    while (!this.#playerWin) {
      const playerInput = await InputView.getPlayerInput();

      // 🧑‍🚀 Player-3: playerInput을 [number, number, number]와 같은 number[] type으로 변환
      this.#playerNumberSet = playerInput.split('').map(Number);

      const [ballCountMessage, strike] = CheckBallCount.calculateBallCount(
        this.#playerNumberSet,
        this.randomNumSet
      );
      this.#isPlayerWin(strike);
      OutputView.printMessage(ballCountMessage);
    }
  }

  async #isPlayerWin(strike) {
    if (strike === 3) this.#playerWin = true;
  }

  /**
   * 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
   * @returns
   */
  async #checkRestartGame() {
    OutputView.printMessage(GUIDE_MESSAGES.playerWin);

    /**
     * @type {string}
     */
    const playerInput = await InputView.getRestartInput();

    if (playerInput === RESTART_GAME_NUMBERS.restart) this.startGame();
    if (playerInput === RESTART_GAME_NUMBERS.end) return;
  }
}

export default Player;
