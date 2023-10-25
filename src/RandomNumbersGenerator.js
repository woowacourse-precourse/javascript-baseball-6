import { Random } from "@woowacourse/mission-utils";

class RandomNumbersGenerator {
  #START_INCLUSIVE;
  #END_INCLUSIVE;
  #COUNT;
  constructor(startInclusive, endInclusive, count) {
    this.#START_INCLUSIVE = startInclusive;
    this.#END_INCLUSIVE = endInclusive;
    this.#COUNT = count;
  }

  generateUnique() {
    const array = [];
    while (array.length < this.#COUNT) {
      const number = Random.pickNumberInRange(
        this.#START_INCLUSIVE,
        this.#END_INCLUSIVE
      );
      if (!array.includes(number)) array.push(number);
    }
    return array;
  }
}

export default RandomNumbersGenerator;
