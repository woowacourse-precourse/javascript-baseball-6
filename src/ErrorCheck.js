class ErrorCheck {
  static listStringCheck(string) {
    // ascii code ('1':49 '9':57)
    try {
      ErrorCheck.stringLengthCheck(string, 3);
      ErrorCheck.duplicationInStringCheck(string);
      ErrorCheck.rangeCheckByCharCode(string, 49, 57);
    } catch (error) {
      throw new Error('[ERROR] Wrong input')
    }
  }

  static retryStringCheck(string) {
    // ascii code ('1':49 '9':50)
    try {
      ErrorCheck.stringLengthCheck(string, 1);
      ErrorCheck.rangeCheckByCharCode(string, 49, 50);
    } catch (error) {
      throw new Error('[ERROR] Wrong input');
    }
  }

  static stringLengthCheck(string, length) {
    if (string.length != length) throw new Error('[ERROR] Wrong Length');
  }

  static duplicationInStringCheck(string) {
    // if first index and last index are different
    // same character is in the string
    [...string].forEach((letter, index, array) => {
      if (array.indexOf(letter) != array.lastIndexOf(letter))
        throw new Error('[ERROR] Same letters in String');
    });
  }

  static rangeCheckByCharCode(string, lower, maximum) {
    [...string].forEach((element) => {
      if (element.charCodeAt(0) < lower || maximum < element.charCodeAt(0))
        throw new Error('[ERROR] Out of Range');
    });
  }

  static consoleErrorThrow(error) {
    error.message = `[ERROR] ${error.message}`
    throw new Error(error);
  }
}

export default ErrorCheck