import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  #targetNumbers;
  #userNumbers;
  #strikeCnt;
  #ballCnt;

  constructor() {
    this.#targetNumbers = [];
    this.#userNumbers = [];
    this.#strikeCnt = 0;
    this.#ballCnt = 0;
  }

  selectTargetNumbers() {
    for (let i = 0; i < 3; i++) {
      const randomNuber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.#targetNumbers.push(randomNuber);
    }
  }

  getUserNumbers() {
    const consoleMessage = "숫자를 입력해주세요 : ";
    MissionUtils.Console.readLine(consoleMessage, (numbers) => {
      this.#userNumbers = [...numbers].map((number) => Number(number));
    });
  }
}

export default BaseballGame;
