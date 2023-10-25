import { Console, Random } from "@woowacourse/mission-utils";

const ANSWER_TABLE = {
  "0b0s": "낫싱",
  "1b0s": "1볼",
  "2b0s": "2볼",
  "3b0s": "3볼",
  "0b1s": "1스트라이크",
  "1b1s": "1볼 1스트라이크",
  "2b1s": "2볼 1스트라이크",
  "0b2s": "2스트라이크",
  "1b2s": "1볼 2스트라이크",
  "0b3s": "3스트라이크",
};

class App {
  constructor() {
    this._randomNumber = this.generateRandomNumber();
    this.isContinue = true;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isContinue) {
      const userInput = await this.parsingUserInput();

      if (!this.checkValidAnswer(userInput)) {
        Console.print(
          "입력값이 유효하지 않습니다. 세자리 숫자로 입력해주세요."
        );
        continue;
      }

      let usersAnswer = this.validateParsedInput(userInput);

      this.printResult(usersAnswer);

      if (usersAnswer === "0b3s") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.isContinue = false;
        await this.checkContinueOrExit();
      }
    }
  }

  generateRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }

  async parsingUserInput() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요: ");

    if (userInput == null || userInput.trim() === "") {
      throw new Error(
        "[ERROR] 입력값이 유효하지 않습니다. 프로그램을 종료합니다."
      );
    }

    return userInput.trim().split("").map(Number);
  }

  printResult(usersAnswer) {
    Console.print(ANSWER_TABLE[usersAnswer]);
  }

  checkValidAnswer(userInput) {
    if (
      userInput.length !== 3 ||
      new Set(userInput).size !== 3 ||
      userInput.some(isNaN)
    ) {
      return false;
    }

    return true;
  }

  validateParsedInput(userInput) {
    let strike = 0;
    let ball = 0;

    userInput.forEach((num, idx) => {
      if (!this._randomNumber.includes(num)) return;

      if (this._randomNumber.indexOf(num) === idx) {
        strike++;
      } else {
        ball++;
      }
    });

    return `${ball}b${strike}s`;
  }

  async checkContinueOrExit() {
    const userInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (userInput === "1") {
      this.continueGame();
    }

    if (userInput === "2") {
      Console.print("게임을 종료합니다.");
    }
  }

  continueGame() {
    this._randomNumber = this.generateRandomNumber();
    this.isContinue = true;
    this.play();
  }
}

const app = new App();
app.play();

export default App;
