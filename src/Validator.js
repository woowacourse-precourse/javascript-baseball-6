class Validator {
  static checkIsNumber(input) {
    return input.filter((num) => Number.isNaN(num)).length === 0;
  }
  static checkIsThreeNumbers(input) {
    return input.length === 3;
  }
}

export default Validator;
