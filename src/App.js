import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (
      await this.startGame(this.getRandomNumbers())
    );
  }

  async startGame(answer) {}

  getRandomNumbers() {
    const arr = [];
    while (arr.length < 3) {
      const rand = Random.pickNumberInRange(1, 9);
      if (arr.includes(rand)) continue;
      arr.push(rand);
    }
    return arr;
  }
}

export default App;
