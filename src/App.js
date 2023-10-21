import generateNumber from './utils/Number.js';
import { print, input } from './view/View.js';
import Message from './utils/Message.js';

export default class App {
  #answerNumber;

  constructor() {
    this.init();
  }

  async play() {
    try {
      print(Message.GAME_START);
      const inputNumber = (await input(Message.INPUT_NUMBER)).trim();
      console.log('사용자의 입력:', inputNumber);
    } catch (e) {
      console.error(e);
    }
  }

  init() {
    this.#answerNumber = generateNumber(1, 9);
    console.log(this.#answerNumber);
  }
}

const app = new App();
app.play();
