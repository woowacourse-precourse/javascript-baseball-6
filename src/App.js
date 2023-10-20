import { Console } from '@woowacourse/mission-utils';
import Game from './game.js';

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.game = new Game();
    await this.game.guess();

    if (await this.#askContinue()) this.play();
  }

  /** 계속할지 여부 */
  async #askContinue() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );

    if (input === '1') return true;
    if (input === '2') return false;
    throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
  }
}

export default App;
