import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer';
import { MESSAGES, STATUS } from './constants/Constants';

class App {
  constructor() {
    this.computer = new Computer();
  }

  userNumber = [];
  computerNumber = [];

  // 게임 시작 문구를 출력한다.
  printGameStart = () => {
    Console.print(MESSAGES.start);
  };

  /**
   * 사용자 숫자 입력에 대한 유효성을 검사한다.
   * @param {*} input
   * @return {boolean}
   */
  checkUserNumberValidation = (input) => {
    const validRegex = /^[1-9]{3}$/;

    if (validRegex.test(input)) {
      if (new Set(input).size === 3) {
        return true;
      }
    }

    return false;
  };

  /**
   * 사용자 숫자 입력을 받는다.
   * @return {[number, number, number]}
   */
  getUserNumberInput = async () => {
    const input = await Console.readLineAsync(MESSAGES.user_number);

    if (!this.checkUserNumberValidation(input)) {
      Console.print(MESSAGES.error);
      throw new Error(MESSAGES.error);
    }

    return Array.from(input).map((el) => Number(el));
  };

  // 게임 재시작 또는 종료 문구를 출력한다.
  printRestartOrEnd = () => {
    Console.print(MESSAGES.restart_or_end);
  };

  /**
   * 게임 재시작 또는 종료 입력에 대한 유효성을 검사한다.
   * @param {*} input
   * @return {boolean}
   */
  checkRestartOrEndValidation = (input) => {
    return input === '1' || input === '2';
  };

  /**
   * 게임 재시작 또는 종료 입력을 받는다.
   * @return {number}
   */
  getRestartOrEndInput = async () => {
    const input = await Console.readLineAsync();

    if (!this.checkRestartOrEndValidation(input)) {
      Console.print(MESSAGES.error);
      throw new Error(MESSAGES.error);
    }

    return input;
  };

  /**
   * 숫자 야구 게임 결과를 계산한다.
   * @param {[number, number, number]} computer
   * @param {[number, number, number]} user
   * @return {object}
   */
  calculateGameResult = async (computer, user) => {
    const result = { ball: 0, strike: 0 };

    computer.map((el, idx) => {
      if (user.indexOf(el) > -1) {
        if (user.indexOf(el) === idx) {
          result.strike += 1;
        } else {
          result.ball += 1;
        }
      }
    });

    return result;
  };

  /**
   * 숫자 야구 게임 결과 문구를 출력한다.
   * @param {number} status
   * @param {object} result
   */
  printGameResult = (status, result) => {
    const { ball, strike } = result;

    switch (status) {
      case STATUS.nothing:
        Console.print(MESSAGES.result.nothing);
        break;
      case STATUS.continue:
        Console.print(`${ball}볼 ${strike}스트라이크`);
        break;
      case STATUS.over:
        Console.print(MESSAGES.result.all_strike);
        Console.print(MESSAGES.game_over);
        break;
    }

    return;
  };

  // 숫자 야구 게임을 준비한다.
  gameReady = async () => {
    this.computerNumber = this.computer.createRandomNumber();
    await this.gameStart();
  };

  // 숫자 야구 게임을 시작한다.
  gameStart = async () => {
    while (true) {
      this.userNumber = await this.getUserNumberInput();

      const result = await this.calculateGameResult(
        this.computerNumber,
        this.userNumber
      );

      if (result.ball === 0 && result.strike === 0) {
        this.printGameResult(STATUS.nothing, result);
      } else if (result.strike === 3) {
        this.printGameResult(STATUS.over, result);
        await this.gameRestartOrEnd();

        return;
      } else {
        this.printGameResult(STATUS.continue, result);
      }
    }
  };

  // 숫자 야구 게임을 재시작하거나 종료한다.
  gameRestartOrEnd = async () => {
    this.printRestartOrEnd();

    const input = await this.getRestartOrEndInput();

    if (input === '1') {
      await this.gameReady();
    }
  };

  async play() {
    this.printGameStart();
    await this.gameReady();

    return;
  }
}

export default App;
