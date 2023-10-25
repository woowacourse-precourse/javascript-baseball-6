class Exception {
  static baseballException(answer) {
    const answerSet = new Set(answer.split(""));

    if (answerSet.size !== 3 || isNaN(answer) || answer.includes("0")) {
      return false;
    }
    return true;
  }
}

export default Exception;
