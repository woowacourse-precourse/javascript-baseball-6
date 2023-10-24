import { Random, Console } from "@woowacourse/mission-utils";

// App 클래스를 사용자가 숫자 야구 게임을 할 수 있는 컴퓨터라고 생각하고 구현
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

  compareNumber(guessNumber) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (guessNumber[i] === this.secretNumber[i]) {
        strike += 1;
        continue;
      }
      if (this.secretNumber.includes(guessNumber[i])) ball += 1;
    }
  }

  playBaseBall() {
    this.generateSecretNumber();
    const guessNumber = App.inputGuessNumber();
    this.compareNumber(guessNumber);
  }

  play() {
    App.printGreeting();
    this.playBaseBall();
  }
}

export default App;
