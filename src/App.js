import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  printStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createRandomNumber() {
    const RANDOM_NUMBER = new Set();
    while (RANDOM_NUMBER.size !== 3) {
      RANDOM_NUMBER.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...new Set(RANDOM_NUMBER)];
  }

  async inputNumber() {
    const USER_NUMBER = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요: "
    );

    return USER_NUMBER;
  }

  async exception(USER_NUMBER) {
    if (
      USER_NUMBER.length !== 3 ||
      new Set(USER_NUMBER).size !== 3 ||
      USER_NUMBER.includes("0")
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async calculateScore(USER_NUMBER, RANDOM_NUMBER) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (RANDOM_NUMBER[i] === USER_NUMBER[i]) {
        strike++;
      } else if (RANDOM_NUMBER.includes(USER_NUMBER[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    return strike;
  }

  async replay() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요"
    );
    const REPLAY_NUMBER = await MissionUtils.Console.readLineAsync("");

    return REPLAY_NUMBER === "1" ? true : false;
  }

  async play() {
    this.printStartMessage();
    let replay = false;

    do {
      let correct = false;
      const RANDOM_NUMBER = this.createRandomNumber().join("");
      MissionUtils.Console.print(RANDOM_NUMBER);

      while (correct === false) {
        const USER_NUMBER = await this.inputNumber();
        await this.exception(USER_NUMBER);
        const STRIKE = await this.calculateScore(USER_NUMBER, RANDOM_NUMBER);
        if (STRIKE === 3) {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          correct = true;
        }
      }

      replay = await this.replay();
    } while (replay === true);
  }
}

export default App;

const app = new App();
app.play();
