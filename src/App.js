import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.getRandomNum();
  }

  async getRandomNum() {
    const computer = [];
    let computerNum = "";
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    computerNum = computer.join("");
    await this.getUserNum(computerNum);
  }

  async getUserNum(computerNum) {
    const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    await this.validCheckUserNum(userNum);
    await this.checkResult(computerNum, userNum);
  }

  async validCheckUserNum(userNum) {
    if (!this.isCheckLength(userNum)) {
      throw new Error("[ERROR] 숫자의 길이는 3이어야합니다.");
    } else if (!this.isCheckDigit(userNum)) {
      throw new Error("[ERROR] 1~9사이의 숫자만 입력해야합니다.");
    } else if (!this.isCheckDuplicate(userNum)) {
      throw new Error("[ERROR] 중복되지 않은 숫자여야합니다.");
    }
  }

  isCheckLength(userNum) {
    return userNum.length === 3;
  }

  isCheckDigit(userNum) {
    return /^[1-9]+$/.test(userNum);
  }

  isCheckDuplicate(userNum) {
    return new Set(userNum).size === 3;
  }

  async checkResult(computerNum, userNum) {
    let strike = this.countStrike(computerNum, userNum);
    let ball = this.countBall(computerNum, userNum);
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      await this.getUserNum(computerNum);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
      await this.getUserNum(computerNum);
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.exitGame();
      } else {
        await this.getUserNum(computerNum);
      }
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      await this.getUserNum(computerNum);
    }
  }

  countStrike(computerNum, userNum) {
    let strike = 0;
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] === userNum[i]) {
        strike++;
      }
    }
    return strike;
  }

  countBall(computerNum, userNum) {
    let ball = 0;
    for (let i = 0; i < computerNum.length; i++) {
      if (computerNum[i] !== userNum[i] && computerNum.includes(userNum[i])) {
        ball++;
      }
    }
    return ball;
  }

  async exitGame() {
    const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (restart === "1") {
      this.getRandomNum();
    } else if (restart === "2") {
      MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error("[ERROR] 1 또는 2를 입력해야합니다.");
    }
  }
}

export default App;
