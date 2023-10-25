import { Console, MissionUtils } from '@woowacourse/mission-utils';
import InputProcessor from './InputProcessor.js';

class App {
  generateRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computerNumbers = this.generateRandomNumbers();
    const userNumbers = await InputProcessor.inputNumber();
  }
}

const app = new App();
app.play();

export default App;
