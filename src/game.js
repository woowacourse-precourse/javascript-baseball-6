import { Console, Random } from '@woowacourse/mission-utils';
import { CONSTANTS, validate, score } from './utils';

class Game {
  #answer = [];

  constructor() {
    this.#setAnswer();
  }

  /** 숫자를 맞춰보는 메서드 */
  async guess() {
    const guesser = await this.#input();
    const scores = score(guesser, this.#answer);

    Console.print(scores.toString());

    if (scores.strikes === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return;
    }

    await this.guess();
  }

  /** 숫자 입력을 받아오는 메서드 */
  async #input() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요 : ');

    const numbers = inputString.split('').map(Number);
    validate(numbers);

    return numbers;
  }

  /** 무작위 세 자릿수를 뽑아 세팅하는 메서드 */
  #setAnswer() {
    const set = new Set();
    while (set.size < 3) {
      set.add(
        Random.pickNumberInRange(CONSTANTS.RANGE.from, CONSTANTS.RANGE.to)
      );
    }
    this.#answer = Array.from(set);
  }
}

export default Game;
