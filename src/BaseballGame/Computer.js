import { pickNumberInRange } from "../utils/random.js";

class Computer {
  #numbers = [];

  createNumbers() {
    while (this.#numbers.length < 3) {
      const number = pickNumberInRange(1, 9);
      if (this.#numbers.includes(number)) {
        continue;
      }
      this.#numbers.push(number);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Computer;
