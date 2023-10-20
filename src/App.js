import { Console, Random } from '@woowacourse/mission-utils';

class App {
  /**
   * 생성자
   */
  constructor() {
    this.score = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };
    this.answer = [];
    this.setAnswer();
  }

  async play() {
    this.greet();
  }

  /**
   * 환영 인사를 출력하는 메서드
   */
  greet() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

export default App;
