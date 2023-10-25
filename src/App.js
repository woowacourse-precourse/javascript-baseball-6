import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computer = [];
  end = false;

  prepareGame() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  validNumber(number) {
    if (number.length !== 3) {
      return "[ERROR] 숫자는 3자리여야 합니다.";
    }

    if (isNaN(parseInt(number))) {
      return "[ERROR] 입력값은 숫자여야 아닙니다.";
    }

    if (number.includes("0")) {
      return "[ERROR] 숫자에 0이 포함되어 있습니다.";
    }

    if (new Set(number).size !== 3) {
      return "[ERROR] 각 자릿수는 서로 다른 숫자여야 합니다.";
    }
    return false;
  }

  async receiveNumber() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      const err = this.validNumber(number);
      if (err) throw new Error(err);

      return number;
    } catch (error) {
      throw error;
    }
  }

  checkResult(number) {
    const ask = [...number];
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (parseInt(ask[i]) === this.computer[i]) {
        strike++;
      } else if (this.computer.includes(parseInt(ask[i]))) {
        ball++;
      }
    }

    return [strike, ball];
  }

  printResult(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.end = true;
    } else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async askRestart() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      if (number !== "1" && number !== "2") {
        throw new Error("[ERROR] 숫자는 1 혹은 2 만 입력해야 합니다.");
      }
      return number;
    } catch (error) {
      throw error;
    }
  }

  async play() {
    try {
      this.prepareGame();

      while (!this.end) {
        const number = await this.receiveNumber();
        const [strike, ball] = this.checkResult(number);
        this.printResult(strike, ball);
      }
      if ((await this.askRestart()) === "1") {
        this.computer = [];
        this.end = false;
        this.play();
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;
