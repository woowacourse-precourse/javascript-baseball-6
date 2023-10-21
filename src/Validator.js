class Validator {
  static isLength({ min, max, array }) {
    return min <= array.length && array.length <= max;
  }

  static isNumberArray(array) {
    return array.every((v) => typeof v === "number");
  }

  static containsZero(array) {
    return false;
  }

  static isUnique(array) {
    return true;
  }
}

export default Validator;
