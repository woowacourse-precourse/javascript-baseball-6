import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer";
import { MESSAGES, STATUS } from "./constants/Constants";

class App {
  constructor() {
    this.computer = new Computer();
  }

  userNumber = [];
  computerNumber = [];

  printGameStart = () => {
    Console.print(MESSAGES.START);
  };

  /***   
    1. Number
    2. 1에서 9 사이의 숫자
    3. 서로 다른 세 자리의 숫자
  ***/
  checkUserNumberValidation = (input) => {
    const validRegex = /^[1-9]{3}$/;

    if (validRegex.test(input)) {
      if (new Set(input).size === 3) {
        return true;
      }
    }

    return false;
  };

  getUserNumberInput = async () => {
    const input = await Console.readLineAsync(MESSAGES.USER_NUMBER);
    if (!this.checkUserNumberValidation(input)) {
      Console.print(MESSAGES.ERROR);
      throw new Error(MESSAGES.ERROR);
    }
    return Array.from(input).map((el) => Number(el));
  };

  printRestartOrEnd = () => {
    Console.print(MESSAGES.RESTART_OR_END);
  };

  checkRestartOrEndValidation = (input) => {
    const validRegex = /^[12]$/;
    return validRegex.test(input) ? true : false;
  };

  getRestartOrEndInput = async () => {
    const input = await Console.readLineAsync();
    if (!this.checkRestartOrEndValidation(input)) {
      Console.print(MESSAGES.ERROR);
      throw new Error(MESSAGES.ERROR);
    }
    return input;
  };

  calculateGameResult = async (computer, user) => {
    const result = { ball: 0, strike: 0 };

    computer.map((el, idx) => {
      if (user.indexOf(el) > -1) {
        if (user.indexOf(el) === idx) {
          result.strike++;
        } else {
          result.ball++;
        }
      }
    });

    return result;
  };

  printGameResult = (status, result) => {
    switch (status) {
      case STATUS.NOTHING:
        Console.print(MESSAGES.RESULT.NOTHING);
        return;
      case STATUS.CONTINUE:
        Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
        return;
      case STATUS.OVER:
        Console.print(MESSAGES.RESULT.ALL_STRIKE);
        Console.print(MESSAGES.GAME_OVER);
        return;
    }
  };

  gameReady = async () => {
    this.computerNumber = this.computer.createRandomNumber();
    await this.gameStart();
  };

  gameStart = async () => {
    while (true) {
      this.userNumber = await this.getUserNumberInput();

      const result = await this.calculateGameResult(
        this.computerNumber,
        this.userNumber
      );

      if (result.ball === 0 && result.strike === 0) {
        this.printGameResult(STATUS.NOTHING, result);
      } else if (result.strike === 3) {
        this.printGameResult(STATUS.OVER, result);
        this.printRestartOrEnd();
        const input = await this.getRestartOrEndInput();
        if (input === "1") {
          await this.gameReady();
        }
        return;
      } else {
        this.printGameResult(STATUS.CONTINUE, result);
      }
    }
  };

  async play() {
    this.printGameStart();
    await this.gameReady();
    return;
  }
}

export default App;
