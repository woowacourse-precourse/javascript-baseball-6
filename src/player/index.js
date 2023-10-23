import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES, ERROR_MESSAGES } from '../../constants/index.js';
import InputValidator from './inputValidator.js';
import Opponent from '../opponent/index.js';

class Player {
  /**
   * 유저가 입력한 서로 다른 3자리 수를 담은 배열
   * @type {[number, number, number]}
   */
  static playerNumberSet;

  async startGame() {
    this.opponent = new Opponent();
    await this.getPlayerNumber();
  }

  // P-1 플레이어는 3자리 숫자를 맞추기 위해 숫자를 입력
  async getPlayerNumber() {
    try {
      const playerInput = await Console.readLineAsync(GUIDE_MESSAGES.INPUT);

      // P-1-a 유효성 검사에 통과하지 못한 경우 에러 메시지와 함께 종료
      InputValidator.isValidNumberSet(playerInput);
      this.handleNumberSet(playerInput);
    } catch (error) {
      throw error;
    }
  }

  async handleNumberSet(input) {
    // 유효하다면 [number, number, number] 형태의 배열화
    this.playerNumberSet = input.split('').map(Number);
    this.requestBallCount();
  }

  async requestBallCount() {
    const [ballCountMessage, strike] = this.opponent.checkBallCount(
      this.playerNumberSet
    );

    Console.print(ballCountMessage);

    if (strike === 3) {
      this.getPlayAgain();
    } else {
      this.getPlayerNumber();
    }
  }

  async getPlayAgain() {
    try {
      Console.print(GUIDE_MESSAGES.PLAYER_WIN);
      const playerInput = await Console.readLineAsync(
        GUIDE_MESSAGES.PLAY_AGAIN
      );

      if (playerInput === '1') {
        this.startGame();
      } else if (playerInput === '2') {
        Console.print(GUIDE_MESSAGES.END);
      } else {
        throw new Error(ERROR_MESSAGES.INVALID_REPLAY_NUMBER);
      }
    } catch (error) {}
  }
}

export default Player;
