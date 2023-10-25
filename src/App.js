import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();
  }

  generateComputerNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      let result = [];
      while (result[0] !== 3) {
        const userNumbers = await this.getUserInput();
        result = this.compareNumbers(userNumbers);
        this.displayResult(...result);
      }
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (restart === "1") {
        this.computerNumbers = this.generateComputerNumbers();
        await this.play();
      }
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!/^[1-9]{3}$/.test(userInput) || new Set(userInput).size !== 3) {
      throw new Error("[ERROR] 잘못된 입력입니다. 서로 다른 3자리 숫자를 입력해주세요.");
    }
    return userInput.split("").map(Number);
  }



  compareNumbers(userNumbers) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumbers.includes(userNumbers[i])) {
        if (this.computerNumbers[i] === userNumbers[i]) {
          strikes++;
        } else {
          balls++;
        }
      }
    }

    return [strikes, balls];
  }

  displayResult(strikes, balls) {
    if (strikes === 0 && balls === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strikes === 3) {
      MissionUtils.Console.print("3스트라이크");
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }
}

export default App;
