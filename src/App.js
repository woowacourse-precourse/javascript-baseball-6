import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [];
  }
  genSecretNumber() {
    while (this.secretNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.secretNumber.includes(number)) {
        this.secretNumber.push(number);
      }
    }
  }

  validateInput(input) {
    const checkNumber = [];
    const stringToArray = [...input];

    if (stringToArray.length !== 3) {
      return false;
    }

    stringToArray.forEach((item) => {
      if (isNaN(item)) {
        return false;
      }

      if (checkNumber.includes(item)) {
        return false;
      }

      checkNumber.push(item);
    });
    return checkNumber;
  }

  async getInput() {
    const guess = await MissionUtils.Console.readLineAsync();
    const validGuess = this.validateInput(guess);
    if (!validGuess) {
      throw Error;
    }
    return validGuess;
  }

  async play() {
    this.genSecretNumber();
    const userInput = await this.getInput().catch((e) => {
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    });
  }
}

export default App;
