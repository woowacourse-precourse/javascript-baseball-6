import { Console, Random } from "@woowacourse/mission-utils";
import { evaluateScore, printScore } from "./score.js";
import { readAnswerInput, readEndDecisionInput } from "./input.js";

class App {
  async play() {
    await App.#startGame();

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const endDecisionInput = await readEndDecisionInput();
    if (endDecisionInput === "1") {
      await this.play();
    }
  }

  static async #startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const answer = App.#pickRandomThreeNums();
    await App.#runGameLoop(answer);
  }

  static async #runGameLoop(answer) {
    const answerInput = await readAnswerInput();
    const score = evaluateScore(answerInput, answer);
    printScore(score);

    if (score.strikeCount !== 3) {
      await App.#runGameLoop(answer);
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
