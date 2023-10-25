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
    Console.print("숫자 야구 게임을 시작합니다.");
    this._randomNumber = this.generateRandomNumber();
  }

  play() {
    this.getUserInput();
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

  async getUserInput() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요: ");

    this.validateUserInput(userInput);
  }

  validateUserInput(userInput) {
    let usersAnswer = this.checkCorrectAnswer(userInput);
    let isValidAnswer = this.checkValidAnswer(userInput);

    if (!isValidAnswer) {
      throw new Error(
        "[ERROR] 올바르지 않은 숫자입니다. 프로그램을 종료합니다."
      );
    }

    if (usersAnswer === "0b3s") {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.checkContinueOrExit();
    } else {
      Console.print(ANSWER_TABLE[usersAnswer]);
      this.getUserInput();
    }
  }

  checkValidAnswer(userInput) {
    if (
      userInput.length !== 3 ||
      new Set(userInput).size !== 3 ||
      userInput.split("").some(isNaN)
    ) {
      return false;
    }

    return true;
  }

  checkCorrectAnswer(userInput) {
    let strike = 0;
    let ball = 0;

    const usersNumberArr = userInput.split("").map((num) => parseInt(num));

    usersNumberArr.forEach((num, idx) => {
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
      this.checkContinueGame();
    }

    if (userInput === "2") {
      Console.print("게임을 종료합니다.");
    }
  }

  checkContinueGame() {
    this._randomNumber = this.generateRandomNumber();
    this.play();
  }
}

const app = new App();
app.play();

export default App;
