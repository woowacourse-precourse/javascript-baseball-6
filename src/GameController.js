import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";

export class GameController {
  constructor() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
  }
}
