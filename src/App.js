import { Console } from "@woowacourse/mission-utils";
import { evaluateScore, printScore } from "./score.js";
import { readAnswerInput, readEndDecisionInput } from "./input.js";
import { pickRandomThreeNumbers } from "./random.js";
import { message } from "./constants.js";

class App {
  answerNumbers;

  async play() {
    this.startGame();
    await this.runGameLoop();
    await this.wrapUpGame();
  }

  startGame() {
    Console.print(message.GAME_STARTED);
    this.setNewAnswer();
  }

  setNewAnswer() {
    this.answerNumbers = pickRandomThreeNumbers();
  }

  async runGameLoop() {
    const answerInput = await readAnswerInput();
    const score = evaluateScore(answerInput, this.answerNumbers);
    printScore(score);

    if (score.strikeCount !== 3) {
      await this.runGameLoop();
    }
  }

  async wrapUpGame() {
    Console.print(message.GAME_ENDED);
    const endDecisionInput = await readEndDecisionInput();
    if (endDecisionInput === "1") {
      await this.play();
    }
  }
}

export default App;
