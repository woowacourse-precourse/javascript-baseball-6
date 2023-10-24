import { Random, Console } from "@woowacourse/mission-utils";

// App 클래스를 사용자가 숫자 야구 게임을 할 수 있는 컴퓨터라고 생각하고 구현
class App {
  #secretNumber = [null, null, null];
  #strike = 0;
  #ball = 0;

  static #printGreeting(type) {
    if (type === "start") Console.print("숫자 야구 게임을 시작합니다.");
    if (type === "end")
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  #generateSecretNumber() {
    while (this.#secretNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#secretNumber.includes(number)) {
        this.#secretNumber.push(number);
      }
    }
  }

  // 사용자에게 3자리 숫자를 입력받은 후, 각각의 숫자를 요소로 가지는 배열로 변환 후 반환
  static async #inputGuessNumber() {
    const userInput = Console.readLineAsync("숫자를 입력해주세요 : ");
    const userInputArray = userInput.split("").map(Number);
    return userInputArray;
  }

  printCompareResult() {
    let result = "";
    result += this.#strike !== 0 ? `${this.#strike}스트라이크 ` : "";
    result += this.#ball !== 0 ? `${this.#ball}볼` : "";
    Console.print(result);
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
    App.printCompareResult();
  }

  #playBaseBall() {
    this.#generateSecretNumber();
    while (this.#strike < 3) {
      const guessNumber = App.#inputGuessNumber();
      this.#compareNumber(guessNumber);
    }
  }

  play() {
    App.#printGreeting("start");
    this.#playBaseBall();
    App.#printGreeting("end");
  }
}

export default App;
