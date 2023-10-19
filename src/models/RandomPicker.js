import { Random } from "@woowacourse/mission-utils";

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

    while (digitsArray.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      digitsArray.add(randomNumber);
    }

    const resultArray = Array.from(digitsArray);
    return parseInt(resultArray.join(''), 10);
  }
}

export default RandomPicker;