import Print from "./Print.js";
import Computer from "./Computer.js";
import Calculate from "./Calculate.js";

export default class Game {
  constructor() {
    this.answer = null;
    this.player = null;
  }

  async start() {
    Print.startMessage();
    this.getComputerNumber();

    this.player = await Print.getPlayerNumber();

    const calculate = new Calculate();
    calculate.compareAnsAndPlayer(this.answer, this.player);
  }

  getComputerNumber() {
    const computer = new Computer();
    computer.makeThreeRandomNumber();
    this.answer = computer.getComputerNumber();
  }
}
