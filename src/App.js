import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const answer = App.#pickRandomThreeNums();

    while (true) {
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

      const scoredInput = parsedInput
        .map((number, index) => (number === answer[index] ? "strike" : number))
        .map((number) => (answer.includes(number) ? "ball" : number));

      const ballCount = scoredInput.filter((score) => score === "ball").length;
      const strikeCount = scoredInput.filter((score) => score === "strike").length;

      const isNothing = !ballCount && !strikeCount;
      const hasBallAndStrike = ballCount && strikeCount;

      const hint = isNothing
        ? "낫싱"
        : hasBallAndStrike
        ? `${ballCount}볼 ${strikeCount}스트라이크`
        : ballCount
        ? `${ballCount}볼`
        : `${strikeCount}스트라이크`;

      Console.print(hint);

      if (strikeCount === 3) {
        break;
      }
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
