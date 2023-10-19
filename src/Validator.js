class Validator {
  static checkIsNumber(input) {
    return input.filter((num) => Number.isNaN(num)).length === 0;
  }
  static checkIsThreeNumbers(input) {
    return input.length === 3;
  }
  static checkHasDuplicate(input) {
    return new Set(input).size === input.length;
  }
  static checkHasZero(input) {
    return input.includes(0);
  }
}

export default Validator;
