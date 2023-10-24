import { Console } from '@woowacourse/mission-utils';

const PLAY_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const RUN_END_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

class Print {
  static resultsFrom({ ball, strike }) {
    const ballResult = `${ball == 0 ? '' : ball + '볼 '}`;
    const strikeResult = `${strike == 0 ? '' : strike + '스트라이크'}`;
    let result = `${ballResult}${strikeResult}`;
    if (result === '') result = '낫싱';
    Console.print(result);
  }

  static playStartMessage() {
    Console.print(PLAY_START_MESSAGE);
  }

  static runEndMessage() {
    Console.print(RUN_END_MESSAGE);
  }

}

export default Print;