import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  #GAME_NUMBER_LEN = 3;
  #computerNumbers;
  constructor() {
    this.gameStart();
  }
  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getRandomNumbers();
    console.log(this.#computerNumbers);
  }
  getRandomNumbers() {
    const returnNumbers = [];

    while (returnNumbers.length !== this.#GAME_NUMBER_LEN) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!returnNumbers.includes(randomNumber))
        returnNumbers.push(randomNumber);
    }

    this.#computerNumbers = returnNumbers;
  }
}

export default BaseballGame;
