import Print from "./Print.js";
import Computer from "./Computer.js";
import Calculate from "./Calculate.js";

export default class Game {
  constructor() {
    Print.startMessage();
    this.answer = null;
    this.player = null;
    this.ball = 0;
    this.strike = 0;
  }

  start() {
    this.setGame();

    this.proceedGame();
  }

  setGame() {
    this.createComputerNumber();
  }

  createComputerNumber() {
    const computer = new Computer();
    computer.makeThreeRandomNumber();
    this.answer = computer.getComputerNumber();
  }

  async proceedGame() {
    this.player = await Print.getPlayerNumber();

    this.compareTwoNumber();

    Print.showHint(this.ball, this.strike);

    this.decideGameClear();
  }

  compareTwoNumber() {
    const calculate = new Calculate();
    calculate.compareAnsAndPlayer(this.answer, this.player);
    [this.ball, this.strike] = calculate.getResult();
  }

  async decideGameClear() {
    if (!Calculate.isPlayerWin(this.strike)) {
      this.proceedGame();
      return;
    }

    Print.winMessage();
    const restartOption = await Print.getReStart();

    if (Calculate.isReStart(restartOption)) {
      this.start();
      return;
    }
  }
}
