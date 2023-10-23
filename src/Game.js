import Print from "./Print";
import Computer from "./Computer";
import Calculate from "./Calculate";

export default class Game {
  constructor() {
    Print.startMessage();
    this.answer = null;
    this.player = null;
    this.ball = 0;
    this.strike = 0;
  }

  async start() {
    try {
      this.setGame();
      await this.proceedGame();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  setGame() {
    this.createComputerNumber();
  }

  createComputerNumber() {
    const computer = new Computer();
    this.answer = computer.makeThreeRandomNumber().getComputerNumber();
  }

  async proceedGame() {
    try {
      this.player = await Print.getPlayerNumber();

      this.compareTwoNumber();

      Print.showHint(this.ball, this.strike);

      await this.decideGameClear();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  compareTwoNumber() {
    const calculate = new Calculate();
    [this.ball, this.strike] = calculate
      .compareAnsAndPlayer(this.answer, this.player)
      .getResult();
  }

  async decideGameClear() {
    if (!Calculate.isPlayerWin(this.strike)) {
      return await this.proceedGame();
    }

    Print.winMessage();
    const restartOption = await Print.getReStart();

    if (Calculate.isReStart(restartOption)) {
      return await this.start();
    }
  }
}
