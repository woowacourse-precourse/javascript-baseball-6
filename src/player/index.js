import { MissionUtils } from '@woowacourse/mission-utils';
import constants from '../../constants/index.js';
import InputValidator from './inputValidator.js';
import Opponent from '../opponent/index.js';

const { Console } = MissionUtils;
const { MESSAGES } = constants;

class Player {
  /**
   * 유저가 입력한 서로 다른 3자리 수를 담은 배열
   * @type {[number, number, number]}
   */
  static playerNumberSet;

  startGame = () => {
    this.getPlayerNumber();
    this.opponent = new Opponent();
  };

  // P-1 플레이어는 3자리 숫자를 맞추기 위해 숫자를 입력
  getPlayerNumber = async () => {
    try {
      const playerInput = await Console.readLineAsync(MESSAGES.INPUT);
      this.handleNumberSet(playerInput);
    } catch (error) {}
  };

  handleNumberSet = (input) => {
    // P-1-a 유효성 검사에 통과하지 못한 경우 에러 메시지와 함께 종료
    if (!InputValidator.isValidNumberSet(input)) {
      throw new Error(MESSAGES.ERROR.INVALID_COUNT_NUMBER);
    }

    // 유효하다면 [number, number, number] 형태의 배열화
    this.playerNumberSet = input.split('').map(Number);
    this.requestBallCount();
  };

  requestBallCount = () => {
    const [ballCountMessage, strike] = this.opponent.checkBallCount(
      this.playerNumberSet
    );

    Console.print(ballCountMessage);

    if (strike === 3) {
      this.getPlayAgain();
    } else {
      this.getPlayerNumber();
    }
  };

  getPlayAgain = async () => {
    try {
      Console.print(MESSAGES.PLAYER_WIN);
      const playerInput = await Console.readLineAsync(MESSAGES.PLAY_AGAIN);

      if (playerInput === '1') {
        this.startGame();
      } else if (playerInput === '2') {
        Console.print(MESSAGES.END);
      } else {
        throw new Error(MESSAGES.ERROR.INVALID_REPLAY_NUMBER);
      }
    } catch (error) {}
  };
}

export default Player;
