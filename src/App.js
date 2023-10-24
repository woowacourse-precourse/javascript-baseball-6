import { Random, Console } from "@woowacourse/mission-utils";

class App {
  static MAX_RANDOM_NUMBER = 9;
  static MIN_RANDOM_NUMBER = 1;
  static NUMBERS_LENGTH = 3;
  static GAME_RESTART_OPTION = "1";
  static GAME_QUIT_OPTION = "2";

  generateRandomNumbers() {
    const randomNumbers = new Set();

    while (randomNumbers.size < App.NUMBERS_LENGTH) {
      const number = Random.pickNumberInRange(
        App.MIN_RANDOM_NUMBER,
        App.MAX_RANDOM_NUMBER
      );
      randomNumbers.add(number);
    }

    return [...randomNumbers];
  }

  validateUserInput(input) {
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력해주세요.");

    if (input.length !== App.NUMBERS_LENGTH)
      throw new Error("[ERROR] 입력값은 3자리 숫자만 가능합니다.");

    const uniqueChars = new Set(input.split(""));
    if (uniqueChars.size !== input.length) {
      throw new Error("[ERROR] 중복되지 않는 3자리 숫자를 입력해주세요.");
    }
  }

  calculateScore(inputNumbers, randomNumbers) {
    let strike = 0;
    let ball = 0;

    for (let index = 0; index < inputNumbers.length; index++) {
      if (inputNumbers[index] === randomNumbers[index]) strike++;
      else if (randomNumbers.includes(inputNumbers[index])) ball++;
    }

    return { strike, ball };
  }

  printResult(strike, ball) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async guessNumber() {
    const randomNumbers = this.generateRandomNumbers();

    while (true) {
      try {
        Console.print("숫자를 입력해 주세요 :");
        const userInput = await Console.readLineAsync("");

        this.validateUserInput(userInput);

        const inputNumbers = [...userInput].map((num) => parseInt(num));
        const { strike, ball } = this.calculateScore(
          inputNumbers,
          randomNumbers
        );

        this.printResult(strike, ball);

        if (strike === App.NUMBERS_LENGTH) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          return;
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }

  validateGameOption(option) {
    if (option !== App.GAME_RESTART_OPTION && option !== App.GAME_QUIT_OPTION)
      throw new Error("[ERROR] 1 또는 2만 입력해주세요");
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let option = App.GAME_RESTART_OPTION;

    while (option === App.GAME_RESTART_OPTION) {
      await this.guessNumber();
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      try {
        option = await Console.readLineAsync("");
        this.validateGameOption(option);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
