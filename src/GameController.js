import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";

export class GameController {
  constructor() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
    this.user = new User();
  }

  startGame() {
    this.user.inputAnswer();
  }
}
