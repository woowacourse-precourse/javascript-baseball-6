import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #answer = [];
  /**
   * 생성자
   */
  constructor() {
    this.score = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };
    this.#answer = [];
  }

  async play() {
    this.greet();
    this.setAnswer();
    Console.print(this.#answer);
  }

  /**
   * 환영 인사를 출력하는 메서드
   */
  greet() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  /**
   *
   */
  setAnswer() {
    const RANGE = [1, 9];
    const set = new Set();
    while (set.size < 3) {
      set.add(Random.pickNumberInRange(RANGE[0], RANGE[1]));
    }
    this.#answer = [...set];
  }
}

export default App;
