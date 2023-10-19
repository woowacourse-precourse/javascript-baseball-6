import { getPlayerInput } from '../view/InputView.js';
import Player from '../model/Player.js';
import Computer from '../model/Computer.js';

export default class BaseballController {
  #Player;

  #Computer;

  constructor() {
    this.#Player = new Player();
    this.#Computer = new Computer();
  }

  play() {
    getPlayerInput().then((input) => {
      const selectedNumber = new Set(input.split('').map(Number));
      this.#Player.setSelectNumber(selectedNumber);
      this.test();
    });
  }

  test() {
    console.log(this.#Player.getSelectNumber());
    console.log(this.#Computer.getSelectNumber());
  }
}
