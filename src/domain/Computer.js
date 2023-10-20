import generateNumbers from "../utils/generateNumber";

class Computer {
  #value;
  constructor() {
    this.#value = null;
  }

  start() {
    this.#value = generateNumbers({ size: 3, min: 1, max: 9 });
  }

  reset() {
    this.#value = null;
  }

  getValue() {
    return this.#value;
  }
}

export default Computer;