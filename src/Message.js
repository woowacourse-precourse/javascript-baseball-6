import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from './Constants.js';

class Message {
  static printGameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  static printGameOver() {
    MissionUtils.Console.print(
      `${NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    );
  }
}

export default Message;
