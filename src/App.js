import { Random, Console } from '@woowacourse/mission-utils';

class App {
  getThreeNumbers() {
    const numbers = new Set();

    while (numbers.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }

    return [...numbers];
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const computerNumbers = this.getThreeNumbers();
  }
}

// TODO: Remove this code
const app = new App();
app.play();

export default App;
