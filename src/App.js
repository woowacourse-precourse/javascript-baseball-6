import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.#answer = [];
    this.#userInput = [];
    this.#gameStatus = false;
  }

  async play() {
    this.showMessage("숫자 야구 게임을 시작합니다.");
    await this.configureGame();
  }

  getAnswerValue() {
    return this.#answer;
  }

  async fetchInput(message) {
    return await Console.readLineAsync(message);
  }

  verifyInput(input) {
    const isInt = Number.isInteger(+input);
    const isLengthThree = input?.length === 3;
    const isPositive = Math.sign(input) === 1;

    return {
      isInt: isInt,
      isLengthThree: isLengthThree,
      isPositive: isPositive,
    };
  }

  showMessage(message) {
    Console.print(message);
  }

  generateAnswer() {
    this.#answer = [];

    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  async obtainUserInput() {
    let input = await this.fetchInput("숫자를 입력해주세요 : ");

    const { isInt, isLengthThree, isPositive } = this.verifyInput(input);
    if (!isInt || !isLengthThree || !isPositive) {
      triggerError();
    }

    input = input.split("").map(Number);

    return input;
  }

  getUserInputValue() {
    return this.#userInput;
  }

  compareResults() {
    let strike = 0;
    let ball = 0;

    const computerNumbers = this.#answer;
    const userNumbers = this.#userInput;

    for (let i = 0; i < computerNumbers.length; i++) {
      const index = userNumbers.indexOf(computerNumbers[i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }

    return { strike, ball };
  }

  async configureGame() {
    this.generateAnswer();
    await this.initializeGame();
  }

  async displayResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      this.showMessage("낫싱");
    } else {
      let output = "";

      if (ball > 0) {
        output += `${ball}볼 `;
      }

      if (strike > 0) {
        output += `${strike}스트라이크`;
      }

      this.showMessage(output);
    }
  }

  async promptRestart() {
    const input = await this.fetchInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (input === "1") {
      this.generateAnswer();
    } else if (input === "2") {
      this.showMessage("게임종료");
      return true;
    } else {
      this.showMessage("1 또는 2를 입력하세요.");
      return "invalid";
    }
  }

  async initializeGame() {
    while (!this.#gameStatus) {
      this.#userInput = await this.obtainUserInput();
      const { strike, ball } = this.compareResults();
      this.displayResult(strike, ball);

      if (strike === 3) {
        this.showMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.#gameStatus = await this.promptRestart();
        if (this.#gameStatus === "invalid") {
          this.#gameStatus = await this.promptRestart();
        }
      }
    }
  }

  #answer;
  #userInput;
  #gameStatus;
}

const triggerError = () => {
  throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
};

export default App;
