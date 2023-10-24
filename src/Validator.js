const ASCII_NUMERIC_MIN = 48;
const ASCII_NUMERIC_MAX = 57;

class Validator {
  #VALID_LENGTH = 3;

  #ERROR = '[ERROR]';

  checkExpectedAnswerValue(expectedAnswerValue) {
    if (
      !this.isValidInput(expectedAnswerValue) || !Validator.isNumericWord
    ) {
      this.throwError();
    }
  }

  isValidInput(value) {
    return value && value.length === this.#VALID_LENGTH;
  }

  static isNumericWord(value) {
    let result = true;
    value.split('').forEach((STR) => {
      const ASCII = STR.charCodeAt(0);
      if (ASCII < ASCII_NUMERIC_MIN || ASCII > ASCII_NUMERIC_MAX) {
        result = false;
      }
    });
    return result;
  }

  throwError() {
    throw this.#ERROR;
  }

  checkCommand(command) {
    if (command !== '1' && command !== '2') throw this.#ERROR;
  }
}

export default Validator;
