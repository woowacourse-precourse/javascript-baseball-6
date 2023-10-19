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
    console.log(this.#userNumbers);
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
}

export default BaseballGame;
