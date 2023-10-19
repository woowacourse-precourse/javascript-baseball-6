import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  #GAME_NUMBER_LEN = 3;
  #computerNumbers;
  #userNumbers;

  constructor() {
    this.gameStart();
  }
  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getRandomNumbers();
  }
  getRandomNumbers() {
    const returnNumbers = [];

    while (returnNumbers.length !== this.#GAME_NUMBER_LEN) {
      const RANDOME_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!returnNumbers.includes(RANDOME_NUMBER))
        returnNumbers.push(RANDOME_NUMBER);
    }

    this.#computerNumbers = returnNumbers;
  }

  async inputUserNumber() {
    const input = (
      await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
    )
      .split("")
      .map(Number);
    this.validUserInput(input);
    this.#userNumbers = input;
  }

  validUserInput(input) {
    if (input.length !== this.#GAME_NUMBER_LEN)
      throw new Error("서로 다른 3자리 수를 입력해주세요.");
    if (new Set(input).size !== this.#GAME_NUMBER_LEN)
      throw new Error("서로 다른 3자리 수를 입력해주세요.");
    for (const value of input) {
      if (isNaN(value)) throw new Error("서로 다른 3자리 수를 입력해주세요.");
    }
  }

  /**
   *
   * @returns {boolean} 성공시 ture값을, 실패시 false값을 반환
   */
  inputResult() {
    const { strike, ball } = this.getStrikeAndBall();

    this.outputResult({ strike, ball });

    if (strike === 3) return true;
    return false;
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

  outputResult({ strike, ball }) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print(`낫싱`);
    else if (strike === 0) MissionUtils.Console.print(`${ball}볼`);
    else if (ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
  }

  endGame() {}
}

export default BaseballGame;
