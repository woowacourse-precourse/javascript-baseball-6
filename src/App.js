import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    while (true) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      const computerNumbers = this.getComputerNumbers();

      let strike = 0;
      while (strike < 3) {
        const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        if (userInput.length !== 3) {
          throw new Error("[ERROR]");
        }

        const result = this.compareNumbers(computerNumbers, userInput.split("").map(Number));
        strike = result.strike;

        if (strike === 3) {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        } else {
          this.printResult(result);
        }
      }

      const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (restart === "2") {
        break;
      }
    }
  }

  getComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  compareNumbers(computerNumbers, userNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumbers[i] === userNumbers[i]) {
        strike++;
      } else if (computerNumbers.includes(userNumbers[i])) {
        ball++;
      }
    }

    return { strike, ball };
  }

  printResult({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      if (ball > 0) MissionUtils.Console.print(`${ball}볼`);
      if (strike > 0) MissionUtils.Console.print(`${strike}스트라이크`);
    }
  }
}

export default App;