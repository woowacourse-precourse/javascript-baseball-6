import { GUIDE_MESSAGES, PLAY_AGAIN_NUMBERS } from '../../constants/index.js';
import {
  numberSetValidator,
  playAgainNumberValidator,
} from '../utils/inputValidator.js';
import Opponent from '../opponent/index.js';
import ViewInput from '../view/viewInput.js';
import ViewOutput from '../view/viewOutput.js';

class Player {
  /**
   * 유저가 입력한 서로 다른 3자리 수를 담은 배열
   * @type {[number, number, number]}
   */
  #playerNumberSet;

  async startGame() {
    this.opponent = new Opponent();
    await this.getPlayerNumberSet();
  }

  // 🧑‍🚀 Player-1: 플레이어는 3자리 숫자를 맞추기 위해 input에 숫자를 입력
  async getPlayerNumberSet() {
    /**
     * @type {string}
     */
    const playerInput = await ViewInput.getUserInput(GUIDE_MESSAGES.INPUT);

    // 🧑‍🚀 Player-2: 입력받은 input의 유효성 검사를 진행.
    numberSetValidator(playerInput);

    // 유효한 playerInput을 넘김.
    this.handleNumberSet(playerInput);
  }

  /**
   * 🧑‍🚀 Player-3: playerInput을 [number, number, number]와 같은 number[] type으로 변환
   * @param {string} playerInput
   */
  handleNumberSet(playerInput) {
    this.#playerNumberSet = playerInput.split('').map(Number);
    this.requestBallCount();
  }

  // 🧑‍🚀 Player-4: 👾상대방의 checkBallCount()를 통해 플레이어의 input에 대한 볼카운트를 계산한다.
  requestBallCount() {
    const [ballCountMessage, strike] = this.opponent.checkBallCount(
      this.#playerNumberSet
    );
    ViewOutput.printMessage(ballCountMessage);

    // 🧑‍🚀 Player-4-a: `3스트라이크가 아닌 경우` 🧑‍🚀 Player-1 로직을 콜백한다.
    if (strike === 3) this.getPlayAgain();
    //🧑‍🚀 Player-4-b: `3스트라이크인 경우` 볼카운트와 함께 게임 종료 메시지를 print한다.
    else this.getPlayerNumberSet();
  }

  /**
   * 🧑‍🚀 Player-5: `게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.` 메시지의 input에 재시작 여부를 입력한다.
   * @returns
   */
  async getPlayAgain() {
    ViewOutput.printMessage(GUIDE_MESSAGES.PLAYER_WIN);
    const playerInput = await ViewInput.getUserInput(GUIDE_MESSAGES.PLAY_AGAIN);

    // 🧑‍🚀 Player-5-a: 입력한 숫자가 유효성 검사 (`'1' 또는 '2'`)에 통과하지 못하면 예외를 발생시켜 게임을 종료한다.
    playAgainNumberValidator(playerInput);

    if (playerInput === PLAY_AGAIN_NUMBERS.AGAIN) this.startGame();
    if (playerInput === PLAY_AGAIN_NUMBERS.END) return;
  }
}

export default Player;
