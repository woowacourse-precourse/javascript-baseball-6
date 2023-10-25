import { Console, Random } from "@woowacourse/mission-utils";

class BaseballGame {
  constructor() {
    this.computerNumber = this.generateComputerNumber();
    this.attempts = 0;
  }

  generateComputerNumber() {
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomIndex = Random.pickNumberInRange(1, numbers.length) - 1;
      const digit = numbers.splice(randomIndex, 1)[0];
      computerNumber.push(digit);
    }

    return computerNumber.join("");
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const playRound = async () => {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요: ");

      const validationError = this.validateUserInput(userInput);
      if (validationError) {
        Console.print(validationError);
        throw new Error(validationError);
      }

      this.attempts++;
      const result = this.compareNumbers(userInput);

      if (result.strikes === 3) {
        Console.print(
          `3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        this.askForNewGame();
      } else if (result.strikes === 0 && result.balls === 0) {
        Console.print("낫싱");
        playRound();
      } else {
        let message = "";
        if (result.balls > 0) {
          message += `${result.balls}볼`;
        }
        if (result.strikes > 0) {
          message += (message ? " " : "") + `${result.strikes}스트라이크`;
        }
        Console.print(message);
        playRound();
      }
    };

    playRound();
  }

  validateUserInput(userInput) {
    if (!/^[1-9]{3}$/.test(userInput)) {
      return "[ERROR] 1부터 9까지의 숫자를 이용해서 3자리의 자연수를 입력해주세요.";
    }

    const digits = userInput.split("");
    if (digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2]) {
      return "[ERROR] 각 자리의 숫자가 중복되지 않도록 입력해주세요.";
    }
  }

  compareNumbers(userInput) {
    const userDigits = userInput.split("");
    const computerDigits = this.computerNumber.split("");

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userDigits[i] === computerDigits[i]) {
        strikes++;
      } else if (computerDigits.includes(userDigits[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  askForNewGame() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요:");

    Console.readLineAsync("").then((choice) => {
      if (choice === "1") {
        const newGame = new BaseballGame();
        newGame.play();
      } else if (choice === "2") {
        Console.print("프로그램을 종료합니다.");
      } else {
        Console.print("1을 입력하여 게임을 새로 시작하거나 2를 입력하여 종료하세요.");
        this.askForNewGame();
      }
    });
  }
}

const game = new BaseballGame();
game.play();
