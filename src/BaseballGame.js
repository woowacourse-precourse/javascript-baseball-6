import { readInput, printOutput, pickNumberInRange } from "./utils";

class BaseballGame {
  #GAME_NUMBER_LEN = 3;

  /**@type {number[]} */
  #computerNumbers;

  /**@type {number[]} */
  #userNumbers;

  async playGame() {
    this.handleComputer();
    try {
      await this.handleUser();
      await this.handleEnd();
    } catch (error) {
      throw error;
    }
  }

  handleComputer() {
    this.setComputerNumbers(this.getRandomNumbers());
  }

  setComputerNumbers(numbers) {
    //TODO: Numbers가 길이가 3인 숫자로 이루어진 배열인지 검사
    this.#computerNumbers = numbers;
  }

  /**
   * FIXME: get으로 시작하는 메서드는 게터함수를 표현한 것 같다. 수정이 필요할 듯.
   * @returns {number[]}
   */
  getRandomNumbers() {
    const returnNumbers = [];

    while (returnNumbers.length !== this.#GAME_NUMBER_LEN) {
      const RANDOM_NUMBER = pickNumberInRange(1, 9);
      if (!returnNumbers.includes(RANDOM_NUMBER))
        returnNumbers.push(RANDOM_NUMBER);
    }

    return returnNumbers;
  }

  async handleUser() {
    try {
      await this.handleUserInput();
    } catch (error) {
      console.error(error.messgae);
      throw error;
    }
    const { strike, ball } = this.getStrikeAndBall();

    this.printStrikeAndBall({ strike, ball });

    const IS_RE_INPUT = strike !== 3;
    if (IS_RE_INPUT) await this.handleUser();
  }

  async handleUserInput() {
    let userInput;
    try {
      userInput = await readInput("숫자를 입력해주세요 : ");
    } catch (error) {
      throw error;
    }
    const USER_NUMBERS = userInput.split("").map(Number);
    this.validUserNumber(USER_NUMBERS);
    this.setUserNumbers(USER_NUMBERS);
  }

  setUserNumbers(numbers) {
    //TODO: Numbers가 길이가 3인 숫자로 이루어진 배열인지 검사
    this.#userNumbers = numbers;
  }

  validUserNumber(input) {
    if (input.length !== this.#GAME_NUMBER_LEN)
      throw new Error("[ERROR] 입력한 값은 3자리가 아닙니다.");
    for (const value of input) {
      if (isNaN(value))
        throw new Error("[ERROR] 입력한 값에 숫자가 아닌 값이 있습니다.");
    }
    if (new Set(input).size !== this.#GAME_NUMBER_LEN)
      throw new Error("[ERROR] 입력한 값에 중복이 있습니다.");
  }

  /**
   *
   * @returns {{strike : number, ball : number}}
   */
  getStrikeAndBall() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < this.#GAME_NUMBER_LEN; i++) {
      const COMPUTER_NUM = this.#computerNumbers[i];
      for (let j = 0; j < this.#GAME_NUMBER_LEN; j++) {
        const USER_NUM = this.#userNumbers[j];
        if (i === j && COMPUTER_NUM === USER_NUM) strike += 1;
        if (i !== j && COMPUTER_NUM === USER_NUM) ball += 1;
      }
    }

    return { strike, ball };
  }

  printStrikeAndBall({ strike, ball }) {
    if (strike === 0 && ball === 0) printOutput("낫싱");
    else if (strike === 0) printOutput(`${ball}볼`);
    else if (ball === 0) printOutput(`${strike}스트라이크`);
    else printOutput(`${ball}볼 ${strike}스트라이크`);
  }

  async handleEnd() {
    let input;
    try {
      input = await readInput(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
      );
    } catch (error) {
      throw error;
    }
    this.validGameEndInput(input);
    const IS_GAME_RETRY = this.isGameEnd(input);
    if (!IS_GAME_RETRY) await this.playGame();
    if (IS_GAME_RETRY) printOutput("게임 종료");
  }

  validGameEndInput(input) {
    if (input !== "1" && input !== "2")
      throw new Error("[ERROR] 잘못 입력 하셨습니다.");
  }

  /**
   *
   * @param { "1" | "2" } input
   * @returns { boolean }
   */
  isGameEnd(input) {
    if (input === "1") return false;
    if (input === "2") return true;
  }
}

export default BaseballGame;
