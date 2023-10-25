import { Console, Random } from '@woowacourse/mission-utils';
import Score from './score';
import { CONSTANTS } from './constants';
import { input } from './functions/input';

/** * 게임을 관리하는 클래스
 */
class Game {
  #answer = [];

  /** * 생성자
   *  * 무작위 세 자릿수를 뽑아 세팅한다.
   */
  constructor() {
    this.#setAnswer();
  }

  /** * 숫자를 맞춰보는 메서드
   *  * 재귀적으로 동작하여 게임이 끝날 때까지 반복한다.
   */
  async guess() {
    const guesser = await input();
    const scores = new Score(guesser, this.#answer);

    Console.print(scores.toString());

    if (scores.isWin()) {
      Console.print(
        `${CONSTANTS.MAX_INPUT_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
      );
      return;
    }

    await this.guess();
  }

  /** * 무작위 세 자릿수를 뽑아 세팅하는 메서드
   *  * 중복되는 숫자가 없도록 Set을 사용한다.
   */
  #setAnswer() {
    const set = new Set();
    while (set.size < CONSTANTS.MAX_INPUT_SIZE) {
      set.add(
        Random.pickNumberInRange(CONSTANTS.RANGE.from, CONSTANTS.RANGE.to),
      );
    }
    this.#answer = Array.from(set);
  }
}

export default Game;
