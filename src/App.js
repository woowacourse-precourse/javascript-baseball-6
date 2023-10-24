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

  // 유저가 입력한 값과 컴퓨터의 값을 비교합니다.
  // 비교를 하기 쉽게 하기 위해 문자열을 배열로 바꿉니다.
  // 컴퓨터의 값과 유저의 값이 위치도 같으면 strikeCount, 값만 존재한다면 ballCount를 ++합니다.
  // strikeCount가 3이 되지 않는다면 계속 비교, 만약 같다면 다시 시작할 것인지를 물어봅니다.

  async numberCompare() {
    const userInput = await this.userAnswer();
    const computerInput = this.computerInput;
    const computerArr = `${computerInput}`.split("");
    const userArr = `${userInput}`.split("");
    let strikeCount = 0;
    let ballCount = 0;
    computerArr.forEach((ele, idx) => {
      if (ele === userArr[idx]) strikeCount++;
      else if (userArr.includes(ele)) ballCount++;
    });

    this.ballStrikeResult(strikeCount, ballCount);

    if (strikeCount !== 3) return this.numberCompare();
    return this.reStart();
  }
}

const app = new App();
app.play();

export default App;
