import { MissionUtils } from '@woowacourse/mission-utils';
import constants from '../../constants/index.js';

const { Console } = MissionUtils;
const { MESSAGES, THREE_DIGIT_PATTERN } = constants;

class Player {
  constructor() {
    this.getPlayerNumber();
  }

  // P-1 플레이어는 3자리 숫자를 맞추기 위해 숫자를 입력
  getPlayerNumber = () => {
    Console.readLine(MESSAGES.INPUT, (input) => {
      if (this.isValidNumberSet(input)) return Console.print(input);

      // P-1-a 유효성 검사에 통과하지 못하면 예외를 발생시켜 메시지와 함께 게임을 종료.
      throw new Error(MESSAGES.ERROR.INVALID_COUNT_NUMBER);
    });
  };

  // P-1 입력한 숫자에 대한 유효성 검사 로직
  isValidNumberSet = (input) => {
    return THREE_DIGIT_PATTERN.test(input);
  };
}

export default Player;
