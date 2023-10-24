import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [];
  }
  setSecretNumber() {
    this.secretNumber = [];
    while (this.secretNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
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
      checkNumber.push(parseInt(item));
    });
    return checkNumber;
  }

  async getInput() {
    Console.print("숫자를 입력해주세요 :");
    const guess = await Console.readLineAsync();
    const validGuess = this.validateInput(guess);
    if (!validGuess) {
      throw Error;
    }
    return validGuess;
  }

  async getRestartOrder() {
    const order = await Console.readLineAsync();
    if (order === "1") {
      return true;
    }
    if (order === "2") {
      return false;
    }
    throw Error;
  }

  async play() {
    this.setSecretNumber();
    let endFlag = 1;
    while (endFlag === 1) {
      let ball = 0;
      let strike = 0;
      let printString = "";
      const userInput = await this.getInput().catch((e) => {
        throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      });
      console.log(userInput.join(""));
      userInput.forEach((item, index) => {
        if (item === this.secretNumber[index]) {
          strike += 1;
        } else if (this.secretNumber.includes(item)) {
          ball += 1;
        }
      });
      if (ball === 0 && strike === 0) {
        Console.print("낫싱");
        continue;
      }
      if (ball !== 0) {
        printString += `${ball}볼 `;
      }
      if (strike !== 0) {
        printString += `${strike}스트라이크`;
      }
      Console.print(printString);
      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        const isRestart = await this.getRestartOrder().catch((e) => {
          throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
        });
        if (isRestart) {
          this.setSecretNumber();
          continue;
        }
        endFlag = 2;
      }
    }
  }
}

export default App;
