import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const answer = App.#pickRandomThreeNums();

    const answerInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  static #pickRandomThreeNums() {
    const RESULT_SIZE = 3;
    const pickedNumbers = new Array(RESULT_SIZE).fill().map((_) => Random.pickNumberInRange(1, 9));

    const isDuplicate = new Set(pickedNumbers).size !== RESULT_SIZE;
    return !isDuplicate ? pickedNumbers : App.#pickRandomThreeNums();
  }
}

export default App;
