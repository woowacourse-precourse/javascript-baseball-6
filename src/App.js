import { PROGRESS_MESSAGE } from "./constants.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 시작하는 부분의 로직
    Console.print(PROGRESS_MESSAGE.GAME_START);
    this.computerAnswer();
    console.log(this.computerInput);
    return this.numberCompare();
  }

  // 컴퓨터의 랜덤한 3가지의 값을 받아옵니다.
  computerAnswer() {
    const computerInput = [];
    while (computerInput.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerInput.includes(number)) {
        computerInput.push(number);
      }
    }

    // 비교하기 편하게 배열로 되어있는 값을 하나로 합칩니다.
    this.computerInput = computerInput.join("");
  }

  // 유저가 입력한 값을 받아옵니다.

  async userAnswer() {
    const userInput = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_NUMBER
    );

    if (!this.isValid(userInput)) throw new Error("[ERROR]");
    return userInput;
  }
}

const app = new App();
app.play();

export default App;
