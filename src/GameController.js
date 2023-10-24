import { Random } from "@woowacourse/mission-utils";

export default class GameController {
  constructor(gameModel) {
    this.model = gameModel;
  }

  updateRandomComputerNumber() {
    const computerNumber = this.generateRandomNumber();
    this.model.updateComputerNumber(computerNumber);
  }

  generateRandomNumber() {
    let computerNumber = "";
    while (computerNumber.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (computerNumber.includes(randomNum) === false) computerNumber += randomNum;
    }
    return computerNumber;
  }
}
