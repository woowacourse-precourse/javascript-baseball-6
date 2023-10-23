class Exception {
  static baseballException(answer) {
    const ANSWER_SET = new Set(answer.split(""));

    if (ANSWER_SET.size !== 3 || isNaN(answer) || answer.includes("0")) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default Exception;
