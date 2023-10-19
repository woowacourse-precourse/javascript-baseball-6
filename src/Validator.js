class Validator {
  static checkIsNumber(input) {
    return input.filter((num) => Number.isNaN(num)).length === 0;
  }
}

export default Validator;
