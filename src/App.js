import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  #answer;
  #userInput;
  #gameStatus;
  
  constructor() {
    this.#answer = [];
    this.#userInput = [];
    this.#gameStatus = false;
  }

  async play() {
    this.showGameStartMessage();
    await this.configureGame();
  }

  showGameStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomAnswer() {
    this.#answer = [];
    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  async configureGame() {
    this.generateRandomAnswer();
    await this.runGameLoop();
  }

  async runGameLoop() {
    while (!this.#gameStatus) {
      this.#userInput = await this.obtainUserInput();
      const { strike, ball } = this.compareAnswerWithInput();
      this.displayResult(strike, ball);

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.#gameStatus = await this.promptForGameRestart();
      }
    }
  }

  async obtainUserInput() {
    let input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!this.isValidInput(input)) {
      this.throwInputError();
    }
    return input.split("").map(Number);
  }

  isValidInput(input) {
    const isInt = Number.isInteger(+input);
    const isLengthThree = input?.length === 3;
    const isPositive = Math.sign(input) === 1;
    return isInt && isLengthThree && isPositive;
  }

  throwInputError() {
    throw new Error("[ERROR] 입력이 잘못되었습니다. 1부터 9까지의 서로 다른 숫자 3개를 입력해주세요.");
  }

  compareAnswerWithInput() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < this.#answer.length; i++) {
      const index = this.#userInput.indexOf(this.#answer[i]);
      if (index === i) {
        strike += 1;
      } else if (index > -1) {
        ball += 1;
      }
    }

    return { strike, ball };
  }

  displayResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return;
    }

    let output = "";
    if (ball > 0) {
      output += `${ball}볼 `;
    }
    if (strike > 0) {
      output += `${strike}스트라이크`;
    }
    Console.print(output);
  }

  async promptForGameRestart() {
    const input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    switch (input) {
      case "1":
        this.generateRandomAnswer();
        return false;
      case "2":
        Console.print("게임종료");
        return true;
      default:
        Console.print("1 또는 2를 입력하세요.");
        return this.promptForGameRestart();
    }
  }
}

export default App;
