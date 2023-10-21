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

  /** 입력받은 수와 컴퓨터가 생성한 수를 비교하여 결과를 출력하는 메소드 */
  compareInputWithComputerNumber(input) {
    const inputNumberArray = input.toString().split("").map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber.includes(inputNumberArray[i])) {
        if (this.computerNumber[i] === inputNumberArray[i]) {
          strike++;
        } else {
          ball++;
        }
      }
    }

    if (strike === 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      return true;
    } else if (!strike && !ball) {
      MissionUtils.Console.print("낫싱");
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

export default App;
