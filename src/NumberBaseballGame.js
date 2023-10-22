import { Console, Random } from "@woowacourse/mission-utils";
import BaseballTerms from "./BaseballTerms.js";
import Message from "./Message.js";
import Player from "./Player.js";
import Query from "./Query.js";
import Restarter from "./Restarter.js";
import Umpire from "./Umpire.js";
import Validator from "./Validator.js";

class NumberBaseballGame {
  #computerNumbers = this.#getComputerNumbers();

  constructor() {
    console.log(this.#computerNumbers);
    this.player = new Player();
    this.umpire = new Umpire();
    Console.print(Message.START);
  }

  async play() {
    const playerNumbers = await this.#askPlayerNumbers();
    Console.print(`${Query.NUMBERS}${playerNumbers.join("")}`);
    const result = this.umpire.umpire(this.#computerNumbers, playerNumbers);
    Console.print(result);
    if (result === `3${BaseballTerms.STRIKE}`) {
      Console.print(Message.END);
      const shouldRestart = await this.#askRestart();
      if (shouldRestart) this.play();
    } else {
      this.play();
    }
  }

  #getComputerNumbers() {
    const array = [];
    while (array.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!array.includes(number)) array.push(number);
    }
    return array;
  }

  async #askRestart() {
    const answer = await this.player.answer(Query.RESTART);
    const number = Number(answer);
    Restarter.validate(number);
    if (number === 1) return true;
    if (number === 2) return false;
  }

  async #askPlayerNumbers() {
    const answer = await this.player.answer(Query.NUMBERS);
    const array = [...answer].map(Number);
    NumberBaseballGame.validate(array);
    return array;
  }

  static validate(array) {
    if (
      !Validator.isLength({ min: 3, max: 3, array: array }) ||
      !Validator.isNumberArray(array) ||
      Validator.containsZero(array) ||
      !Validator.isUnique(array)
    )
      throw new Error(Message.ERROR.NUMBERS);
  }
}

export default NumberBaseballGame;
