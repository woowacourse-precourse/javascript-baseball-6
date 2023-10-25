import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './Constant.js';
class App {
  constructor() {
    this.answer = [];
  }

  async play() {
    Console.print(MESSAGE.START);
    await this.start();
  }
  async start() {
    this.answer = this.getRandomNumber();
  }
  getRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const pickNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(pickNumber)) {
        randomNumber.push(pickNumber);
      }
    }
    return randomNumber;
  }
}

const app = new App();
app.play();

export default App;
