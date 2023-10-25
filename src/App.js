import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = [];
  }

  async play() {
    this.gameStartMessage();
    this.generateRandomNumber();
  }

  gameStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.answer = computer;
  }
}

export default App;
