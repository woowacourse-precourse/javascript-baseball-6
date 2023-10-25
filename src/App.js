import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (
      await this.startGame(this.getRandomNumbers())
    );
  }

  async startGame(answer) {
    while (true) {
      const input = (await Console.readLineAsync('숫자를 입력해주세요 : '))
        .split(' ').join('')
        .split('').map(Number);

      if (input.length !== 3 || input.some((n) => !Number.isInteger(n))) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
    }
  }

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
