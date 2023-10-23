import { Console } from "@woowacourse/mission-utils";
import { evaluateScore, printScore } from "./score.js";
import { readAnswerInput, readEndDecisionInput } from "./input.js";
import { pickRandomThreeNumbers } from "./random.js";

class App {
  #answerNumbers;

  async play() {
    this.#startGame();
    await this.#runGameLoop();
    await this.#wrapUpGame();
  }

  #startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.#setNewAnswer();
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
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const endDecisionInput = await readEndDecisionInput();
    if (endDecisionInput === "1") {
      await this.play();
    }
  }
}

export default App;
