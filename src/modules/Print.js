import { Console } from '@woowacourse/mission-utils';

class Print {
  static resultsFrom({ ball, strike }) {
    let ballResult = `${ball == 0 ? '' : ball + '볼 '}`;
    let strikeResult = `${strike == 0 ? '' : strike + '스트라이크'}`;
    let result = `${ballResult}${strikeResult}`;
    if (result === '') result = '낫싱';
    Console.print(result);
  }

  static playStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  static runEndMessage() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

}

export default Print;