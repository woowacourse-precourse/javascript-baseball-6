class ValidatorUtil {
  static validateLength(input, length) {
    if (input.length !== length) {
      throw new Error(`[ERROR] 입력의 길이가 ${length}이 아닙니다.`);
    }
  }

  static validateNotDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error("[ERROR] 중복된 값이 있습니다.");
    }
  }

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
    }
  }
}

export default ValidatorUtil;
