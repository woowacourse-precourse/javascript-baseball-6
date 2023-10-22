import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answerNumbers = [];
  }

  generateRandomNumbers(length) {
    const randomNumbers = [];
    while (randomNumbers.length < length) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  async play() {
    this.answerNumbers = this.generateRandomNumbers(3);
    const input = await Console.readLineAsync('input : ');
    Console.print('ouput : '+ input);
    console.log(this.answerNumbers);
  }
}
const app = new App();
app.play();
export default App;
