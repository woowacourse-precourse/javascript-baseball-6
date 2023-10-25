import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.computerNumbers = this.generateRandomNumbers();

    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const inputNumbers = await Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const result = this.evaluateGuess(inputNumbers);

      if (!this.validateUserInput(inputNumbers)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (result === "3스트라이크") {
        const gameover = await this.promptForRestart();
        if (!gameover) {
          break;
        } else {
          this.computerNumbers = this.generateRandomNumbers();
        }
      }

      Console.print(result);
    }
  }

  async promptForRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    const proceedGame = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (proceedGame === "1") {
      return true;
    } else if (proceedGame === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 다른 숫자를 입력하셨습니다.");
    }
  }

  generateRandomNumbers() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }

    return computerNumbers;
  }

  validateUserInput(inputNumbers) {
    const INPUT_REGEX = /^[1-9]\d{2}$/;
    const set = new Set();

    if (!INPUT_REGEX.test(inputNumbers)) {
      return false;
    }

    for (let number of inputNumbers) {
      if (set.has(number)) {
        return false;
      }

      set.add(number);
    }

    return true;
  }

  evaluateGuess(inputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumbers[i] === parseInt(inputNumbers[i])) {
        strike += 1;
      } else if (this.computerNumbers.includes(parseInt(inputNumbers[i]))) {
        ball += 1;
      }
    }

    if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }
}

export default App;
