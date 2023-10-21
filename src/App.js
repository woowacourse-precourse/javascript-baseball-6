import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumber = this.generateRandomNumberArray();
  }

  /** 1에서 9까지 서로 다른 임의의 수 3개를 선택하여 3자리 수를 생성하는 메소드 */
  generateRandomNumberArray() {
    const randomNumberArray = [];
    while (randomNumberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberArray.includes(number)) {
        randomNumberArray.push(number);
      }
    }

    return randomNumberArray;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

export default App;
