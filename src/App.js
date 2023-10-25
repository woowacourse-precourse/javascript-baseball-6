import IOManager from "./IOManager.js";
import AnswerManager from "./AnswerManager.js";

class App {
  constructor() {
    this.ioManager = IOManager.getInstance();
    this.answerManager = AnswerManager.getInstance();
  }

  isGameEnd(strikeCount) {
    return strikeCount === this.answerManager.ANSWER_LENGTH;
  }

  async play() {
    this.ioManager.printStartMessage();

    while (true) {
      await this.playAGame();

      const wantReplay = await this.ioManager.askReplay();
      if (!wantReplay) break;
    }
  }

  async playAGame() {
    this.answerManager.setAnswer();

    while (true) {
      const isGameEnd = await this.playOneRound();
      if (isGameEnd) break;
    }

    this.ioManager.printEndMessage();
  }

  async playOneRound() {
    const number = await this.ioManager.askNumber();

    const { strikeCount, ballCount } =
      this.answerManager.getJudgedCountsFor(number);

    this.ioManager.printRoundResult({ strikeCount, ballCount });

    return this.isGameEnd(strikeCount);
  }
}

export default App;
