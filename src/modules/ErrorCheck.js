class ErrorCheck {
  static listString(string) {
    // ascii code ('1':49 '9':57)
    try {
      ErrorCheck.arrayLikeLength(string, 3);
      ErrorCheck.sameElementInArray([...string]);
      ErrorCheck.stringRangeByCharCode(string, 49, 57);
    } catch (error) {
      throw new Error('[ERROR] Wrong List');
    }
  }

  static string1Or2(string) {
    if (string !== '1' && string !== '2') throw new Error('[ERROR] Not \'1\' or \'2\'');
  }

  static arrayLikeLength(arrayLike, length) {
    if (arrayLike.length != length) throw new Error('[ERROR] Wrong Length');
  }

  static sameElementInArray(array) {
    const setFromArray = new Set(array);
    if (setFromArray.size != array.length) throw new Error('[ERROR] Same element in Array');
  }

  static stringRangeByCharCode(string, lower, maximum) {
    [...string].forEach((element) => {
      if (element.charCodeAt(0) < lower || maximum < element.charCodeAt(0))
        throw new Error('[ERROR] Out of Character Range');
    });
  }

  static otherErrorFormat(error) {
    error.message = `[ERROR] ${error.message}`
    throw new Error(error);
  }
}

export default ErrorCheck;