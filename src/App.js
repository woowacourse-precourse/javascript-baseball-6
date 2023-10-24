const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const answer = this.createRandomNumber();

      try {
        while (true) {
          const input = await this.getInput();

          const hint = this.getHint(answer, input);
          MissionUtils.Console.print(hint);

          if (hint === "3스트라이크") {
            MissionUtils.Console.print(
              "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
            break;
          }
        }
      } catch (error) {
        throw new Error("[ERROR]");
      }

      const restart = await this.isRestart();
      if (restart !== "1") {
        MissionUtils.Console.print("게임을 종료합니다.");
        return;
      }
    }
  }

  createRandomNumber() {
    const elements = [];

    for (let i = 0; i < 3; i++) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!elements.includes(num)) {
        elements.push(num);
      }
    }

    return elements.join("");
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (/^\d{3}$/.test(input)) {
      return input;
    } else {
      throw new Error("잘못된 값입니다."); // 예외 발생
    }
  }

  getHint(answer, input) {
    let strike = 0;
    let ball = 0;
    const hint = [];

    for (let i = 0; i < 3; i++) {
      if (input[i] === answer[i]) {
        strike++;
      } else if (answer.includes(input[i])) {
        ball++;
      }
    }

    if (ball > 0) {
      hint.push(`${ball}볼`);
    }
    if (strike > 0) {
      hint.push(`${strike}스트라이크`);
    }
    if (ball === 0 && strike === 0) {
      hint.push("낫싱");
    }

    return hint.join(" ");
  }

  async isRestart() {
    return await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면1, 종료하려면 2를 입력하세요."
    );
  }
}

const app = new App();
app.play();

export default App;
