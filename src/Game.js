import Print from "./Print.js";
import Computer from "./Computer.js";

export default class Game {
  start() {
    Print.startMessage();

    const computer = new Computer();
    computer.makeThreeRandomNumber();
  }
}
