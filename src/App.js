import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = [];
    this.userInput = "";
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  async startGame() {
    this.generateRandomNumbers();
    try {
      await this.getUserInput();
    } catch (error) {
      console.error(error.message);
    }
  }

  generateRandomNumbers() {
    while (this.randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "서로 다른 3자리의 숫자를 입력해주세요 : "
    );
    this.validateUserInput(userInput);
    this.userInput = userInput;
  }

  validateUserInput(userInput) {
    if (!this.checkUserInputLength(userInput)) {
      throw new Error(
        `[ERROR] ${userInput.length}자리의 숫자를 입력했습니다. 서로 다른 3자리 숫자를 입력해주세요.`
      );
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

const app = new App();
app.play();
