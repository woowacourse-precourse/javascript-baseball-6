class Validator {
  static isLength({ min, max, array }) {
    return true;
  }

  static isNumberArray(array) {
    return true;
  }

  static containsZero(array) {
    return false;
  }

  static isUnique(array) {
    return true;
  }
}

export default Validator;
