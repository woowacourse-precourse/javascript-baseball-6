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

  async receiveNumber() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );

      if (number.length !== 3 || isNaN(parseInt(number))) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
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
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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
