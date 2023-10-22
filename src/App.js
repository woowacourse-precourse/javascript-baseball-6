import { Random, Console } from '@woowacourse/mission-utils';
import GameError from './GameError.js';

const NUMBER_LENGTH = 3;

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

  isInputValid(input) {
    const NUMBERS = /^[1-9]+$/;
    if (!NUMBERS.test(input))
      throw new GameError('숫자만 입력해야 합니다.');

    if (input.length !== NUMBER_LENGTH)
      throw new GameError(`${NUMBER_LENGTH}개의 숫자를 입력해야 합니다.`);

    if (new Set(input).size !== NUMBER_LENGTH)
      throw new GameError('숫자가 중복되었습니다.');
  }

  async play() {
    try {
      const input = await Console.readLineAsync('input : ');
      this.isInputValid(input)
      Console.print('ouput : ' + input);
    } catch (error) {
      Console.print(error.message);
    }
  }
}
const app = new App();
app.play();
export default App;
