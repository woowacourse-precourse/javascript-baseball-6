import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [null, null, null];
  }

  static printGreeting() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateSecretNumber() {
    while (this.secretNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.secretNumber.includes(number)) {
        this.secretNumber.push(number);
      }
    }
  }

  // 사용자에게 3자리 숫자를 입력받은 후, 각각의 숫자를 요소로 가지는 배열로 변환 후 반환
  static async inputGuessNumber() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const userInputArray = userInput.split("").map(Number);
    return userInputArray;
  }

  playBaseBall() {
    this.generateSecretNumber();
    const guessNumber = App.inputGuessNumber();
  }

  play() {
    App.printGreeting();
    this.playBaseBall();
  }
}

export default App;
