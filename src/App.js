import * as MissionUtils from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  randomNumber() {
    const RANDOM_NUMBER = new Set();
    while (RANDOM_NUMBER.size !== 3) {
      RANDOM_NUMBER.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...new Set(RANDOM_NUMBER)];
  }

  async inputNumber() {
    const USER_NUMBER = await Console.readLineAsync("숫자를 입력해주세요: ");
    if (
      USER_NUMBER.length !== 3 ||
      new Set(USER_NUMBER).size !== 3 ||
      USER_NUMBER.includes("0")
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return USER_NUMBER;
  }

  async calculateScore(USER_NUMBER, RANDOM_NUMBER) {
    let STRIKE = 0;
    let BALL = 0;

    for (let i = 0; i < 3; i++) {
      if (RANDOM_NUMBER[i] === USER_NUMBER[i]) {
        STRIKE++;
      } else if (RANDOM_NUMBER.includes(USER_NUMBER[i])) {
        BALL++;
      }
    }

    if (STRIKE === 0 && BALL === 0) {
      Console.print("낫싱");
    } else if (STRIKE === 0) {
      Console.print(`${BALL}볼`);
    } else if (BALL === 0) {
      Console.print(`${STRIKE}스트라이크`);
    } else {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    }

    return STRIKE;
  }

  replay() {
    Console.print("");
  }

  async play() {
    let CORRECT = false;
    Console.print("숫자 야구 게임을 시작합니다.");
    const RANDOM_NUMBER = this.randomNumber().join("");
    Console.print(`${RANDOM_NUMBER}`);
    while (CORRECT === false) {
      const USER_NUMBER = await this.inputNumber();
      const STRIKE = await this.calculateScore(USER_NUMBER, RANDOM_NUMBER);
      if (STRIKE === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        CORRECT = true;
      }
    }
  }
}

export default App;

const app = new App();
app.play();
