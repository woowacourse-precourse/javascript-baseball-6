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

  constructor() {
    this.getPlayerNumber();
    this.opponent = new Opponent();
  }

  // P-1 플레이어는 3자리 숫자를 맞추기 위해 숫자를 입력
  getPlayerNumber = () => {
    Console.readLine(MESSAGES.INPUT, (input) => this.handleNumberSet(input));
  };

  handleNumberSet = (input) => {
    // P-1-a 유효성 검사에 통과하지 못한 경우 에러 메시지와 함께 종료
    if (!InputValidator.isValidNumberSet(input))
      throw new Error(MESSAGES.ERROR.INVALID_COUNT_NUMBER);

    // 유효하다면 [number, number, number] 형태의 배열화
    this.playerNumberSet = input.split('').map(Number);
    this.isCorrected();
  };

  isCorrected = () => {
    this.opponent.checkBallCount(this.playerNumberSet);
  };
}

export default Player;
