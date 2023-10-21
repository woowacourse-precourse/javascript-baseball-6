import { Console } from '@woowacourse/mission-utils';

class Print {
  static printCounts({ ballCount, strikeCount }) {
    let ballResult = `${ballCount == 0 ? '' : ballCount + '볼 '}`;
    let strikeResult = `${strikeCount == 0 ? '' : strikeCount + '스트라이크'}`;
    let result = `${ballResult}${strikeResult}`;
    if (result == '') result = '낫싱';
    Console.print(result);
  }

  static printPlayStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  static printRunEndMessage() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

}

export default Print;