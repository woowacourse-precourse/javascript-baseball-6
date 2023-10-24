import { MissionUtils } from '@woowacourse/mission-utils';
import { LENGTH_OF_ANSWER } from './Constants.js';

class Message {
  static printGameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  static printGameOver() {
    MissionUtils.Console.print(
      `${LENGTH_OF_ANSWER}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    );
  }
}

export default Message;
