const MissionUtils = require("@woowacourse/mission-utils");

class App {
  createRandomNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  validateUserInput(userNumber) {
    if (userNumber.length !== 3) return false;

    for (const num of userNumber) {
      if (isNaN(num) || num < 1 || num > 9) {
        return false;
      }
    }
    return true;
  }

  checkStrikeAndBall(userNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumber[i] == this.computerNumber[i]) {
        strike++;
      } else if (this.computerNumber.includes(parseInt(userNumber[i], 10))) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      return "낫싱";
    }

    let result = "";

    if (ball > 0) {
      result += `${ball}볼 `;
    }

    if (strike > 0) {
      result += `${strike}스트라이크`;
    }

    return result.trim();
  }

  async restartOrEndGame() {
    const restartGame = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (restartGame === "1") {
      this.createRandomNumber();
      return true; 
    } else if (restartGame === "2") {
      MissionUtils.Console.print("게임 종료");
      return false; 
    }

    throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();

    while (true) {
      const userNumber = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      if (!this.validateUserInput(userNumber)) {
        throw new Error("[ERROR]");
      }

      const result = this.checkStrikeAndBall(userNumber);
      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
        const shouldRestart = await this.restartOrEndGame();

        if (shouldRestart) {
          continue;
        } else {
          break;
        }
      }
    }
  }
}

export default App;
