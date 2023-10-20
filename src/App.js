import { Console, Random } from '@woowacourse/mission-utils';
import { validate } from './utils/validator.js';

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    const input = await this.#input();
    // 게임 로직
    const isContinue = await this.#continue();
    if (isContinue) {
      this.play();
    }
  }

  /** 계속할지 여부 */
  async #continue() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );

    if (input === '1' || input === '2') {
      return input === '1';
    }

    throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
  }

  /** 숫자 입력을 받아오는 메서드 */
  async #input() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요 : ');

    const numbers = inputString.split('').map(Number);
    validate(numbers);

    return numbers;
  }
}

export default App;
