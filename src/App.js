import { Console } from '@woowacourse/mission-utils';
import Game from './game';
import { askContinue } from './functions/input';

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  /** * 프로그램 시작점
   *  * 재귀적으로 동작하여 사용자가 종료를 원할 때까지 반복한다.
   */
  async play() {
    this.game = new Game();
    await this.game.guess();

    if (await askContinue()) this.play();
  }
}

export default App;
