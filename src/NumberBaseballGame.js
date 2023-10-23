import { Console, Random } from "@woowacourse/mission-utils";
import BaseballTerms from "./BaseballTerms.js";
import Message from "./Message.js";
import Player from "./Player.js";
import Query from "./Query.js";
import Umpire from "./Umpire.js";
import Validator from "./Validator.js";

class NumberBaseballGame {
  #player = new Player();
  #umpire = new Umpire();
  #computerNumbers = this.#createComputerNumbers();

  async start() {
    // console.log(this.#computerNumbers); // 개발용
    Console.print(Message.START);
    await this.#play();
  }

  async #play() {
    const playerNumbers = await this.#askPlayerNumbers();
    const result = this.#umpire.umpire(this.#computerNumbers, playerNumbers);
    Console.print(result);
    if (result === `3${BaseballTerms.STRIKE}`) await this.#end();
    else await this.#play();
  }

  async #end() {
    Console.print(Message.END);
    const shouldRestart = await this.#askRestart();
    if (shouldRestart) this.#restart();
  }

  async #restart() {
    this.#computerNumbers = this.#createComputerNumbers();
    // console.log(this.#computerNumbers); // 개발용
    await this.#play();
  }

  #createComputerNumbers() {
    const array = [];
    while (array.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!array.includes(number)) array.push(number);
    }
    return array;
  }

  async #askRestart() {
    const answer = await this.#player.answer(Query.RESTART);
    const number = Number(answer);
    if (number === 1) return true;
    if (number === 2) return false;
    throw new Error(Message.ERROR.RESTART);
  }

  async #askPlayerNumbers() {
    const answer = await this.#player.answer(Query.NUMBERS);
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
