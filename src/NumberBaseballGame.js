import { Console } from "@woowacourse/mission-utils";
import Message from "./Message.js";
import Player from "./Player.js";
import Query from "./Query.js";
import Validator from "./Validator.js";

class NumberBaseballGame {
  constructor() {
    this.player = new Player();
    Console.print(Message.START);
  }

  async play() {
    const playerNumbers = await this.askPlayerNumbers();
    Console.print(`${Query.NUMBERS}${playerNumbers.join("")}`);
  }

  async askPlayerNumbers() {
    const array = await this.player.answer(Query.NUMBERS);
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
