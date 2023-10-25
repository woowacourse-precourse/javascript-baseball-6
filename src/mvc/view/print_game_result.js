import {Console} from '@woowacourse/mission-utils';

class PrintGameResult {
  constructor(GAME_RESULT) {
    this.GAME_RESULT = GAME_RESULT;
  }
  printThreeStrike() {
    Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
  printNotRight() {
    if (this.GAME_RESULT.nothing) {
      return Console.print('낫싱');
    }
    if (this.GAME_RESULT.strike === 0) {
      return Console.print(`${this.GAME_RESULT.ball}볼`);
    }  
    if (this.GAME_RESULT.ball === 0) {
      return Console.print(`${this.GAME_RESULT.strike}스트라이크`);
    }
    return Console.print(`${this.GAME_RESULT.ball}볼 ${this.GAME_RESULT.strike}스트라이크`);
  }
}

export default PrintGameResult;