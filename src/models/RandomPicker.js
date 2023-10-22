import { Random } from "@woowacourse/mission-utils";
import { GAME_CONTROL } from "../constants/Constants.js";

class RandomPicker {

  constructor () {
    this.computerNumber = this.pickRandomNumbers();
  }

  pickRandomNumbers() {
    const digitsArray = new Set();

    while (digitsArray.size < GAME_CONTROL.LIMIT_LENGTH) {
      const randomNumber = Random.pickNumberInRange(GAME_CONTROL.START_SCOPE, GAME_CONTROL.END_SCOPE);
      digitsArray.add(randomNumber);
    }

    return parseInt([...digitsArray].join(''));
  }

  getComputerNumber() {
    return this.computerNumber;
  }
}

export default RandomPicker;