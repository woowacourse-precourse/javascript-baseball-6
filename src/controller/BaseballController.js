import { getPlayerInput } from '../view/InputView.js';

export default class BaseballController {
  play() {
    getPlayerInput().then((input) => {
      this.input = input;
      console.log(input);
    });
  }
}
