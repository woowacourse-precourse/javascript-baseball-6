import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  #GAME_NUMBER_LEN = 3;
  /**@type {number[]} */
  #computerNumbers;
  /**@type {number[]} */
  #userNumbers;

  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  startGame() {
    this.#computerNumbers = this.getRandomNumbers();
  }

  getRandomNumbers() {
    const returnNumbers = [];

    while (returnNumbers.length !== this.#GAME_NUMBER_LEN) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!returnNumbers.includes(RANDOM_NUMBER))
        returnNumbers.push(RANDOM_NUMBER);
    }

    return returnNumbers;
  }

  async startUserInput() {
    const USER_INPUT = await this.getUserInput();
    const INPUT_NUMBERS = USER_INPUT.split("").map(Number);
    this.validUserGameNumber(INPUT_NUMBERS);
    this.#userNumbers = INPUT_NUMBERS;
  }

  /**
   *
   * @returns {string}
   */
  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return input;
  }

  validUserGameNumber(input) {
    if (input.length !== this.#GAME_NUMBER_LEN)
      throw new Error("[ERROR] 입력한 값은 3자리가 아닙니다.");
    if (new Set(input).size !== this.#GAME_NUMBER_LEN)
      throw new Error("[ERROR] 입력한 값에 중복이 있습니다.");
    for (const value of input) {
      if (isNaN(value))
        throw new Error("[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.");
    }
  }

  startUserResult() {
    const { strike, ball } = this.getStrikeAndBall();

    this.printStrikeAndBall({ strike, ball });

    if (strike === 3) {
      return false;
    }
    return true;
  }

  getStrikeAndBall() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < this.#GAME_NUMBER_LEN; i++) {
      const COMPUTER_NUM = this.#computerNumbers[i];
      for (let j = 0; j < this.#GAME_NUMBER_LEN; j++) {
        const USER_NUM = this.#userNumbers[j];
        if (i === j && COMPUTER_NUM === USER_NUM) strike++;
        if (i !== j && COMPUTER_NUM === USER_NUM) ball++;
      }
    }

    return { strike, ball };
  }

  printStrikeAndBall({ strike, ball }) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
    else if (strike === 0) MissionUtils.Console.print(`${ball}볼`);
    else if (ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  /**
   *
   * @returns {boolean} 재시작시 true, 게임 종료시 false를 반환
   */
  async endGame() {
    const input = await MissionUtils.Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );

    this.validGameEndInput(input);

    if (input === "1") return true;
    if (input === "2") {
      MissionUtils.Console.print("게임 종료");
      return false;
    }
  }

  validGameEndInput(input) {
    if (input !== "1" && input !== "2")
      throw new Error("[ERROR] 잘못 입력 하셨습니다.");
  }
}

export default BaseballGame;
