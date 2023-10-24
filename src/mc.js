import Message from './message.js';
import Validate from './validate.js';

export default class Mc {
  constructor() {}

  startGame() {
    Message.printGameStart();
  }

  validateNumbers(numbers) {
    return Validate.inputProperNumbers(numbers);
  }

  validateRegameNumber(number) {
    return Validate.inputProperRegameNumber(number);
  }

  async askQuestion() {
    const numbers = await Message.printEnterNumbers();

    return numbers;
  }

  async askRegame() {
    Message.printGameOver();
    const num = await Message.printReset();

    return num;
  }

  tellOf(strike, ball) {
    Message.printResult(strike, ball);
  }
}
