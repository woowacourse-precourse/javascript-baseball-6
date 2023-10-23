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

  static printPlayerGuessResult(cntBall, cntStrike) {
    if (cntBall === 0 && cntStrike === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    if (cntBall === 0) {
      MissionUtils.Console.print(`${cntStrike}스트라이크`);
      return;
    }

    if (cntStrike === 0) {
      MissionUtils.Console.print(`${cntBall}볼`);
      return;
    }

    MissionUtils.Console.print(`${cntBall}볼 ${cntStrike}스트라이크`);
  }
}

export default Message;
