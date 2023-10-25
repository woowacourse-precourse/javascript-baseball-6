class NumberBaseballValidator {
  #START_INCLUSIVE;
  #END_INCLUSIVE;
  #COUNT;
  #RESTART;
  #END;
  constructor(startInclusive, endInclusive, count, restart, end) {
    this.#START_INCLUSIVE = startInclusive;
    this.#END_INCLUSIVE = endInclusive;
    this.#COUNT = count;
    this.#RESTART = restart;
    this.#END = end;
  }

  validate(array) {
    if (
      this.#isLength(array) &&
      this.#isNumberArray(array) &&
      array.every((v) =>
        this.#isBetween(this.#START_INCLUSIVE, this.#END_INCLUSIVE, v)
      ) &&
      this.#isUnique(array)
    )
      return true;
    return false;
  }

  validateRestart(number) {
    if (number === this.#RESTART || number === this.#END) return true;
    return false;
  }

  #isLength(array) {
    return this.#COUNT <= array.length && array.length <= this.#COUNT;
  }

  #isNumberArray(array) {
    return array.every((v) => typeof v === "number");
  }

  #isBetween(startInclusive, endInclusive, value) {
    return startInclusive <= value && value <= endInclusive;
  }

  #isUnique(array) {
    return array.length === new Set(array).size;
  }
}

export default NumberBaseballValidator;
