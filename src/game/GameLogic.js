import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  constructor() {}

  createComputerNumber () {
    const computerNumber = [];
    
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }
}

export default GameLogic;