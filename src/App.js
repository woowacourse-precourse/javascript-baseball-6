import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.round = 1;
    this.isGameEnded = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (!this.isGameEnded) {
      const secretNumber = this.generateSecretNumber();
      const userGuess = await this.getUserGuess();

      if (userGuess === "2") {
        this.handleGameEnd();
      } else {
        const result = this.compareNumbers(secretNumber, userGuess);
        this.displayResult(result);

        if (result === "3스트라이크") {
          this.handleGameEnd();
        }

        this.round++;
      }
    }
  }

  generateSecretNumber() {
    const secretNumber = new Set();

    while (secretNumber.size < 3) {
      secretNumber.add(Random.pickNumberInRange(1, 9));
    }

    return Array.from(secretNumber).join("");
  }

  async getUserGuess() {
    let userGuess;
    do {
      userGuess = await Console.readLineAsync("숫자를 입력해주세요 :");
    } while (this.isInvalidInput(userGuess));

    return userGuess;
  }

  isInvalidInput(userGuess) {
    return userGuess.length !== 3 || new Set(userGuess).size !== 3;
  }

  compareNumbers(secretNumber, userGuess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (secretNumber[i] === userGuess[i]) {
        strike++;
      } else if (secretNumber.includes(userGuess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return "3스트라이크";
    } else if (strike > 0 || ball > 0) {
      return `${ball}볼 ${strike}스트라이크 `;
    } else {
      return "낫싱";
    }
  }

  handleGameEnd() {
    this.isGameEnded = true;

    const restartOption = this.getRestartOption();

    if (restartOption === "1") {
      this.startNewGame();
    } else if (restartOption === "2") {
      Console.print("게임 종료.");
    } else {
      Console.print("잘못 누르셨습니다. Game over.");
    }
  }

  async getRestartOption() {
    return await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 : "
    );
  }

  startNewGame() {
    this.isGameEnded = false;
    this.round = 1;
    Console.print("새 게임 시작중...");
  }

  displayResult(result) {
    Console.print(result);
  }
}

const app = new App();
app.play();

export default App;
