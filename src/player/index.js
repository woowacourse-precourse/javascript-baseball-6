import {
  GUIDE_MESSAGES,
  RESTART_GAME_NUMBERS,
  SETTINGS,
} from '../../constants/index.js';
import RandomNumSet from '../opponent/RandomNumSet.js';
import CheckBallCount from '../opponent/CheckBallCount.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Player {
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

      if (strike === SETTINGS.winningNumber) this.#playerWin = true;
      OutputView.printMessage(ballCountMessage);
    }
  }

  async #checkRestartGame() {
    OutputView.printMessage(GUIDE_MESSAGES.playerWin);

    /**
     * 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
     */
    const playerInput = await InputView.getRestartInput();

    if (playerInput === RESTART_GAME_NUMBERS.restart) this.startGame();
    if (playerInput === RESTART_GAME_NUMBERS.end) return;
  }
}

export default Player;
