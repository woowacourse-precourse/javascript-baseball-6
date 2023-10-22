class ErrorCheck {
  static list(listArray) {
    // ascii code ('1':49 '9':57)
    try {
      ErrorCheck.arrayLikeLength(listArray, 3);
      ErrorCheck.sameElementInArray(listArray);
      ErrorCheck.stringRangeByCharCode(listArray.join(''), 49, 57);
    } catch (error) {
      throw new Error('[ERROR] Wrong List');
    }
  }

  static tryAgain(string) {
    // ascii code ('1':49 '2':50)
    try {
      ErrorCheck.arrayLikeLength(string, 1);
      ErrorCheck.stringRangeByCharCode(string, 49, 50);
    } catch (error) {
      throw new Error('[ERROR] Wrong Retry');
    }
  }

  static arrayLikeLength(arrayLike, length) {
    if (arrayLike.length != length) throw new Error('[ERROR] Wrong Length');
  }

  static sameElementInArray(array) {
    // if first index and last index are different
    // same element is in the ArrayLike
    array.forEach((element) => {
      if (array.indexOf(element) !== stringArray.lastIndexOf(element))
        throw new Error('[ERROR] Same character in String');
    });
  }

  static rangeByCharCode(string, lower, maximum) {
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