import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
      this.computer = computer;
    }
    return;
  }

  duplicateNumber(answer) {
    const userAnswer = [...new Set(answer)];
    return userAnswer.length === 3;
  }

  async answerCheck() {
    const USER_NUMBER = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (
      isNaN(USER_NUMBER) ||
      USER_NUMBER.length !== 3 ||
      !this.duplicateNumber(USER_NUMBER)
    ) {
      throw new Error("[ERROR]");
    } else {
      return USER_NUMBER.split("").map((v) => Number(v));
    }
  }

  async calculateScore() {
    const COMPUTER_NUM = [...this.computer];
    const USER_NUMBER = await this.answerCheck();
    let strike = 0;
    let ball = 0;

    COMPUTER_NUM.forEach((value, index) => {
      if (USER_NUMBER[index] === value) strike += 1;
      else if (USER_NUMBER.includes(value)) ball += 1;
    });

    this.scoreDisplay(strike, ball);

    if (strike === 3) {
      return this.reStart();
    } else return this.calculateScore();
  }

  scoreDisplay(strike, ball) {
    if (strike === 0 && ball !== 0)
      return MissionUtils.Console.print(`${ball}볼`);
    if (strike !== 0 && ball === 0)
      return MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 0 && ball === 0) return MissionUtils.Console.print("낫싱");
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async reStart() {
    const RESET_NUMBER = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (RESET_NUMBER === "1") {
      this.setComputerNumber();
      return this.calculateScore();
    } else if (RESET_NUMBER === "2") {
      MissionUtils.Console.print("게임 종료");
      return;
    } else {
      throw new Error("[ERROR]");
    }
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumber();
    return this.calculateScore();
  }
}

export default App;
