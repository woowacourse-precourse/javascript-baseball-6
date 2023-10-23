import { Console, Random } from "@woowacourse/mission-utils";
import { evaluateScore, printScore } from "./score.js";
import { readAnswerInput, readEndDecisionInput } from "./input.js";

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
    this.#answerNumbers = App.#pickRandomThreeNums();
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

  static #pickRandomThreeNums() {
    const RESULT_SIZE = 3;
    const pickedNumbers = new Array(RESULT_SIZE).fill().map((_) => Random.pickNumberInRange(1, 9));

    const isNotDuplicate = new Set(pickedNumbers).size === RESULT_SIZE;
    return isNotDuplicate ? pickedNumbers : App.#pickRandomThreeNums();
  }
}

export default App;
