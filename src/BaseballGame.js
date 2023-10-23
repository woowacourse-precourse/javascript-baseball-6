import {
  readInput,
  printOutput,
  pickNumberInRange,
} from "./utils/MissionUtils";
import { validLengthOfNumberArray, validGameEndInput } from "./utils/Validate";

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
    validLengthOfNumberArray({ arr: numbers, length: this.#GAME_NUMBER_LEN });
    this.#computerNumbers = numbers;
  }

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
      throw error;
    }

    const { strike, ball } = this.getStrikeAndBall();
    this.printStrikeAndBall({ strike, ball });

    const IS_RE_INPUT = strike !== 3;
    if (IS_RE_INPUT) await this.handleUser();
  }

  async handleUserInput() {
    const USER_INPUT = await readInput("숫자를 입력해주세요 : ");
    const USER_NUMBERS = USER_INPUT.split("").map(Number);
    this.setUserNumbers(USER_NUMBERS);
  }

  setUserNumbers(numbers) {
    validLengthOfNumberArray({ arr: numbers, length: this.#GAME_NUMBER_LEN });
    this.#userNumbers = numbers;
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
    const INPUT = await readInput(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );

    const IS_GAME_RETRY = this.isGameEnd(INPUT);
    if (!IS_GAME_RETRY) await this.playGame();
    if (IS_GAME_RETRY) printOutput("게임 종료");
  }

  isGameEnd(input) {
    validGameEndInput(input);
    if (input === "1") return false;
    if (input === "2") return true;
  }
}

export default BaseballGame;
