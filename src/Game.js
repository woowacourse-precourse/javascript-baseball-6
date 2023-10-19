import Print from "./Print.js";
import Computer from "./Computer.js";
import Calculate from "./Calculate.js";

export default class Game {
  constructor() {
    this.answer = null;
    this.player = null;
    this.ball = 0;
    this.strike = 0;
  }

  async start() {
    await this.setGame();

    this.compareTwoNumber();

    Print.showHint(this.ball, this.strike);
  }

  async setGame() {
    Print.startMessage();
    this.createComputerNumber();
    this.player = await Print.getPlayerNumber();
  }

  createComputerNumber() {
    const computer = new Computer();
    computer.makeThreeRandomNumber();
    this.answer = computer.getComputerNumber();
  }

  compareTwoNumber() {
    const calculate = new Calculate();
    calculate.compareAnsAndPlayer(this.answer, this.player);
    [this.ball, this.strike] = calculate.getResult();
  }
}
