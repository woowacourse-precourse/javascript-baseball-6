import Message from './message.js';
import Validate from './validate.js';

export default class Mc {
  constructor() {}

  startMention() {
    Message.printGameStart();
  }

  validateNumbers(numbers) {
    return Validate.inputProperNumbers(numbers);
  }

  async askQuestion() {
    const numbers = await Message.printEnterNumbers();

    return numbers;
  }

  async askRegame() {
    const num = await Message.printReset();

    return num;
  }

  tellOf(strike, ball) {
    Message.printResult(strike, ball);

    if (strike === 3) {
      Message.printGameOver();
    }
  }
}
