import SETTING from "../constants/setting.js";
import generateNumbers from "../utils/generateNumber.js";

class Computer {
  #value;
  constructor() {
    this.#value = null;
  }

  start() {
    this.#value = generateNumbers({
      size: SETTING.RULE.SIZE,
      min: SETTING.RULE.RANGE.MIN,
      max: SETTING.RULE.RANGE.MAX,
    });
  }

  reset() {
    this.#value = null;
  }

  getValue() {
    return this.#value;
  }
}

export default Computer;