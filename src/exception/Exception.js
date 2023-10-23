class Exception {
  static baseballException(answer) {
    const answerSet = new Set(answer.split(""));

    if (answerSet.size !== 3 || isNaN(answer) || answer.includes("0")) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default Exception;
