import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = this.generateSecretNumber();
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync();
        console.log(`숫자를 입력해주세요: ${input}`);

        if (!this.isValidInput(input)) {
          MissionUtils.Console.print(`올바른 입력이 아닙니다. 서로 다른 3자리 숫자를 입력하세요: ${input}`);
          throw new Error("[ERROR]");
        }

        const result = this.checkGuess(input);
        console.log(result);

        if (result === "3스트라이크") {
          console.log("모두 맞히셨습니다! 게임을 종료합니다.");
          if (await this.playAgain()) {
            this.secretNumber = this.generateSecretNumber();
          } else {
            break;
          }
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }

  isValidInput(input) {
    return /^[1-9]{3}$/.test(input) && new Set(input).size === 3;
  }

  checkGuess(input) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === this.secretNumber[i]) {
        strikes++;
      } else if (this.secretNumber.includes(input[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return `${strikes}스트라이크`;
    } else if (strikes > 0 || balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else {
      return "낫싱";
    }
  }

  async playAgain() {
    const choice = await MissionUtils.Console.readLineAsync();
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    console.log(choice);
  }

  generateSecretNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }
}

export default App;
