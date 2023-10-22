import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const answer = App.#pickRandomThreeNums();

    const answerInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const parsedInput = answerInput.split("").map((char) => parseInt(char, 10));

    // 유효성 검사
    const EXPECTED_LENGTH = 3;
    if (parsedInput.some((char) => typeof char !== "number" || Number.isNaN(char))) {
      throw new Error("[ERROR] 모든 자리가 숫자로 이루어져야 합니다.");
    }
    if (parsedInput.length !== EXPECTED_LENGTH) {
      throw new Error("[ERROR] 세 자리를 입력해주세요.");
    }
    if (parsedInput.some((char) => char === 0)) {
      throw new Error("[ERROR] 1이상 9이하의 숫자로 이루어져야 합니다. 0은 포함될 수 없습니다.");
    }
    if (new Set(parsedInput).size !== parsedInput.length) {
      throw new Error("[ERROR] 모든 자리 수의 값은 서로 달라야 합니다.");
    }
  }

  static #pickRandomThreeNums() {
    const RESULT_SIZE = 3;
    const pickedNumbers = new Array(RESULT_SIZE).fill().map((_) => Random.pickNumberInRange(1, 9));

    const isDuplicate = new Set(pickedNumbers).size !== RESULT_SIZE;
    return !isDuplicate ? pickedNumbers : App.#pickRandomThreeNums();
  }
}

export default App;
