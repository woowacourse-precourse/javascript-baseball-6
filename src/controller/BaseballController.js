import { getPlayerInput } from '../view/InputView.js';
import Player from '../model/Player.js';
import Computer from '../model/Computer.js';
import Referee from '../model/Referee.js';
import { GAME_SETTINGS } from '../constants/GameSettings.js';
import {
  printGameEnd,
  printGameStart,
  printGameStatus,
} from '../view/OutputView.js';

export default class BaseballController {
  #Player;

  #Computer;

  #Referee;

  constructor() {
    this.#Player = new Player();
    this.#Computer = new Computer();
    this.#Referee = new Referee();
    printGameStart();
  }

  play() {
    getPlayerInput().then((input) => {
      const selectedNumber = new Set(input.split('').map(Number));
      this.#Player.setSelectNumber(selectedNumber);
      this.#test();
      this.#check();
    });
  }

  #check() {
    const playerNumber = this.#Player.getSelectNumber();
    const computerNumber = this.#Computer.getSelectNumber();
    const result = this.#Referee.compare(playerNumber, computerNumber);

    printGameStatus(result);
    if (result.strike === GAME_SETTINGS.numberLength) {
      this.#retry();
    }
    this.play();
  }

  static #retry() {
    printGameEnd();
  }

  #test() {
    console.log(this.#Player.getSelectNumber());
    console.log(this.#Computer.getSelectNumber());
  }
}
