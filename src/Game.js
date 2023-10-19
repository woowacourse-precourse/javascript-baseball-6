import Print from "./Print.js";
import Computer from "./Computer.js";
import Validate from "./Validate.js";

export default class Game {
  async start() {
    Print.startMessage();

    const computer = new Computer();
    computer.makeThreeRandomNumber();

    const player = await Print.getPlayerNumber();
  }
}
