import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = [];
    this.userInput = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.startGame();
  }

  async startGame() {
    this.generateRandomNumbers();
    while (true) {
      await this.getUserInput();
      let result = this.getResult();

      if (result) {
        const restart = await this.checkRestart();

        if (restart === 1) {
          this.generateRandomNumbers();
        } else {
          break;
        }
      }
    }
  }

  generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    this.randomNumbers = randomNumbers;
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync(
      "서로 다른 3자리의 숫자를 입력해주세요 : "
    );
    this.validateUserInput(userInput);
    this.userInput = userInput.split("").map(Number);
  }

  getResult() {
    let strikes = 0;
    let balls = 0;
    let result = "";

    for (let i = 0; i < 3; i++) {
      if (this.userInput[i] === this.randomNumbers[i]) {
        strikes++;
      } else if (this.randomNumbers.includes(this.userInput[i])) {
        balls++;
      }
    }

    if (balls > 0 && strikes > 0) {
      result = `${balls}볼 ${strikes}스트라이크`;
    } else if (balls > 0) {
      result = `${balls}볼`;
    } else if (strikes > 0) {
      result = `${strikes}스트라이크`;
      if (strikes === 3) {
        Console.print("3스트라이크");
        return true;
      }
    } else {
      result = "낫싱";
    }

    Console.print(result);
    return false;
  }

  async checkRestart() {
    let restart = 0;

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const userInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    restart = parseInt(userInput);

    if (![1, 2].includes(restart)) {
      throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
    }

    return restart;
  }

  validateUserInput(userInput) {
    if (!this.checkUserInputLength(userInput)) {
      throw new Error("[ERROR] 서로 다른 3자리 숫자를 입력해주세요.");
    }
    if (!this.checkUserInputIsNumbers(userInput)) {
      throw new Error("[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.");
    }
    if (!this.checkUserInputIsDiff(userInput)) {
      throw new Error("[ERROR] 입력한 숫자 중에 중복된 숫자가 있습니다.");
    }
  }

  checkUserInputLength(input) {
    if (input.length !== 3) {
      return false;
    }
    return true;
  }

  checkUserInputIsNumbers(input) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(Number(input[i]))) {
        return false;
      }
    }
    return true;
  }

  checkUserInputIsDiff(input) {
    let uniqueNumber = new Set(input);
    if (uniqueNumber.size !== input.length) {
      return false;
    }
    return true;
  }
}

export default App;
