import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  constructor() {
    this.computerNumber = this.generateNewNumber();
  }

  generateNewNumber() {
    let numberArray = [];

    while (numberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArray.includes(number)) {
        numberArray.push(number);
      }
    }
    return numberArray.join("");
  }

  checkGameResult(userNum) {}
}

export default GameLogic;
