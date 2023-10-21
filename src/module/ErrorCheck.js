class ErrorCheck {
  static listString(string) {
    // ascii code ('1':49 '9':57)
    try {
      ErrorCheck.stringLength(string, 3);
      ErrorCheck.sameCharacterInString(string);
      ErrorCheck.rangeByCharCode(string, 49, 57);
    } catch (error) {
      throw new Error('[ERROR] Wrong input')
    }
  }

  static retryString(string) {
    // ascii code ('1':49 '9':50)
    try {
      ErrorCheck.stringLength(string, 1);
      ErrorCheck.rangeByCharCode(string, 49, 50);
    } catch (error) {
      throw new Error('[ERROR] Wrong input');
    }
  }

  static stringLength(string, length) {
    if (string.length != length) throw new Error('[ERROR] Wrong Length');
  }

  static sameCharacterInString(string) {
    // if first index and last index are different
    // same character is in the string
    [...string].forEach((character, index, array) => {
      if (array.indexOf(character) != array.lastIndexOf(character))
        throw new Error('[ERROR] Same character in String');
    });
  }

  static rangeByCharCode(string, lower, maximum) {
    [...string].forEach((element) => {
      if (element.charCodeAt(0) < lower || maximum < element.charCodeAt(0))
        throw new Error('[ERROR] Out of Character Range');
    });
  }

  static consoleErrorThrow(error) {
    error.message = `[ERROR] ${error.message}`
    throw new Error(error);
  }
}

export default ErrorCheck