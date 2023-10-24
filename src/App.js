import { Console } from "@woowacourse/mission-utils";
import { evaluateScore, printScore } from "./utils/score.js";
import { readAnswerInput, readEndDecisionInput } from "./utils/input.js";
import { pickRandomThreeNumbers } from "./utils/random.js";
import { MESSAGE, END_DECISION } from "./constants.js";

class App {
  #answerNumbers;

  async play() {
    Console.print(MESSAGE.GAME_STARTED);
    await this.#processGame();
  }

  async #processGame() {
    this.#setNewAnswer();
    await this.#runGameLoop();
    await this.#wrapUpGame();
  }

  #setNewAnswer() {
    this.#answerNumbers = pickRandomThreeNumbers();
  }

  async #runGameLoop() {
    const answerInput = await readAnswerInput();
    const score = evaluateScore(answerInput, this.#answerNumbers);
    printScore(score);

    if (score.strikeCount !== 3) {
      await this.#runGameLoop();
    }
  }

  async #wrapUpGame() {
    Console.print(MESSAGE.GAME_ENDED);
    const endDecisionInput = await readEndDecisionInput();
    if (endDecisionInput === END_DECISION.RESTART) {
      await this.#processGame();
    }
  }
}

export default App;
