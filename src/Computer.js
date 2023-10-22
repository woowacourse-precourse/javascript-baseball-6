import { Random } from "@woowacourse/mission-utils";
import Player from "./Player.js";

export default class Computer extends Player {
  ballNumbers;
  constructor() {
    super();
    this.ballNumbers = this.generateBallNumbers();
  }
  generateBallNumbers = () => {
    const shuffleNumbers = [];
    while (shuffleNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!shuffleNumbers.includes(number)) {
        shuffleNumbers.push(number);
      }
    }
    return shuffleNumbers.slice(0, 3).join("");
  };
}
