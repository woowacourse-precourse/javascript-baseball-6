import { Random } from "@woowacourse/mission-utils";
import { GAME_CONTROL } from "../constants/Constants.js";

class RandomPicker {

  constructor () {
    this.computerNumber = null;
  }

  getComputerNumber() {
    if (this.computerNumber === null) { 
      this.computerNumber = this.pickRandomNumbers();
    }

    return this.computerNumber;
  }

  pickRandomNumbers() {
    const digitsArray = new Set();

    while (digitsArray.size < GAME_CONTROL.LIMIT_LENGTH) {
      const randomNumber = Random.pickNumberInRange(GAME_CONTROL.START_SCOPE, GAME_CONTROL.END_SCOPE);
      digitsArray.add(randomNumber);
    }

    const resultArray = [...digitsArray];

    return parseInt(resultArray.join(""));
  }
}

export default RandomPicker;