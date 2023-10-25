import { Random, Console } from "@woowacourse/mission-utils";
import InvalidInputError from "./InvalidInputError";
import { REGEX_VALID_GUESS, REGEX_ONE_OR_TWO } from "./constant";

// App 클래스를 사용자가 숫자 야구 게임을 할 수 있는 컴퓨터라고 생각하고 구현
class App {
  #secretNumber = [];
  #strike = 0;
  #ball = 0;

  // 위치에 따른 문구 출력
  static #printGreeting(type) {
    if (type === "start") Console.print("숫자 야구 게임을 시작합니다.");
    if (type === "end")
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  // 입력의 위치에 따라 유효성 검사를 실시한다.
  static #inputTest(type, userInput) {
    let regex = / /;
    if (type === "guess") regex = REGEX_VALID_GUESS;
    if (type === "playAgain") regex = REGEX_ONE_OR_TWO;
    if (!regex.test(userInput)) throw new InvalidInputError();
  }

  // 사용자에게 3자리 숫자를 입력받은 후, 각각의 숫자를 요소로 가지는 배열로 변환 후 반환
  static async #inputGuessNumber() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    App.#inputTest("guess", userInput);
    const userInputArray = userInput.split("").map(Number);
    return userInputArray;
  }

  #generateSecretNumber() {
    while (this.#secretNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#secretNumber.includes(number)) {
        this.#secretNumber.push(number);
      }
    }
  }

  #compareNumber(guessNumber) {
    this.#strike = 0;
    this.#ball = 0;
    for (let i = 0; i < 3; i++) {
      if (guessNumber[i] === this.#secretNumber[i]) {
        this.#strike += 1;
        continue;
      }
      if (this.#secretNumber.includes(guessNumber[i])) this.#ball += 1;
    }
    this.printCompareResult();
  }

  printCompareResult() {
    let result = "";
    result += this.#ball !== 0 ? `${this.#ball}볼 ` : "";
    result += this.#strike !== 0 ? `${this.#strike}스트라이크` : "";
    result === "" ? Console.print("낫싱") : Console.print(result);
  }

  async #playBaseBall() {
    this.#generateSecretNumber();
    do {
      const guessNumber = await App.#inputGuessNumber();
      this.#compareNumber(guessNumber);
    } while (this.#strike < 3);
  }

  static async #isPlayAgain() {
    const userInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    App.#inputTest("playAgain", userInput);
    if (userInput === "1") return true;
    if (userInput === "2") return false;
  }

  async play() {
    App.#printGreeting("start");
    do {
      await this.#playBaseBall();
      App.#printGreeting("end");
      this.#secretNumber = [];
    } while (await App.#isPlayAgain());
  }
}

export default App;
