import { readInput } from "./utils/MissionUtils";
import handleComputer from "./utils/handleComputer";
import handleUser from "./utils/handleUser";
import handleEnd from "./utils/handleEnd";
import { validNumbers } from "./utils/Validate";

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
    this.setComputerNumbers(
      handleComputer.getRandomNumbers(1, 9, { length: this.#GAME_NUMBER_LEN })
    );
  }

  setComputerNumbers(numbers) {
    validNumbers(numbers, { length: this.#GAME_NUMBER_LEN });
    this.#computerNumbers = numbers;
  }

  async handleUser() {
    await this.handleUserInput();

    await this.handleUserResult();
  }

  async handleUserInput() {
    const USER_INPUT = await readInput("숫자를 입력해주세요 : ");
    const USER_NUMBERS = USER_INPUT.split("").map(Number);
    this.setUserNumbers(USER_NUMBERS);
  }

  setUserNumbers(numbers) {
    validNumbers(numbers, { length: this.#GAME_NUMBER_LEN });
    this.#userNumbers = numbers;
  }

  async handleUserResult() {
    const { strike, ball } = handleUser.getStrikeAndBall({
      computerNumbers: this.#computerNumbers,
      userNumbers: this.#userNumbers,
    });
    handleUser.printStrikeAndBall({ strike, ball });

    const IS_RE_INPUT = strike !== 3;
    if (IS_RE_INPUT) await this.handleUser();
  }

  async handleEnd() {
    const INPUT = await readInput(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );

    const IS_GAME_RETRY = handleEnd.isGameEnd(INPUT);
    if (!IS_GAME_RETRY) await this.playGame();
    if (IS_GAME_RETRY) handleEnd.printGameEnd();
  }
}

export default BaseballGame;
