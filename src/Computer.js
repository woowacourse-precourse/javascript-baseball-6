import { Random } from "@woowacourse/mission-utils";
import Player from "./Player.js";

export default class Computer extends Player {
  ballNumbers;
  constructor() {
    super();
    this.ballNumbers = this.generateBallNumbers();
  }
  generateBallNumbers = () => {
    const numbers = Array.from({ length: 9 }, (_, idx) => idx + 1);
    const shuffleNumbers = Random.shuffle(numbers);
    return shuffleNumbers.slice(0, 3).join("");
  };
}
