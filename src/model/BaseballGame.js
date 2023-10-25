import { pickNumberInRange } from "../utils/index.js";

class BaseBallGame {
  #randomNumbers = [];
  #scoreStore = new Map();

  init(props) {
    this.#randomNumbers = this.generateRandomNumbers(props);
    this.#scoreStore.clear();
  }

  generateRandomNumbers({ min, max, maxInputLength }) {
    const set = new Set();

    while (set.size < maxInputLength) {
      const number = pickNumberInRange(min, max);

      set.add(number);
    }

    return [...set];
  }

  calculateStrikeBall(input) {
    const key = input.join("");

    if (this.#scoreStore.has(key)) {
      return this.#scoreStore.get(key);
    }

    const randomNumbers = this.#randomNumbers;
    const score = { strike: 0, ball: 0 };

    for (let i = 0; i < randomNumbers.length; i++) {
      const inputNumber = input[i];
      const randomNumber = randomNumbers[i];

      if (inputNumber === randomNumber) {
        score.strike++;
        continue;
      }

      if (randomNumbers.includes(inputNumber)) {
        score.ball++;
      }
    }

    this.#scoreStore.set(key, score);

    return score;
  }
}

export default BaseBallGame;