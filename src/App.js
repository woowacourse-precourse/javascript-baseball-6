import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.randomNum = [];
    this.userNum = [];
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
    await this.userNumber();
  }

  randomNumber() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    this.randomNum = randomNum;
  }
  async userNumber() {
    const userNum = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    this.userNum = userNum.split("").map(Number);
  }
}

export default App;
