const Validate = {
  isThreeDigit(input) {
    return input.length === 3;
  },
  isOneToNine(input) {
    const pattern = /^[1-9]+$/;
    return pattern.test(input);
  },
  isNotDuplicateNumber(input) {
    const set = new Set(input);
    return input.length === set.size;
  },
  checkValidNumber(input) {
    if (!this.isThreeDigit(input)) {
      throw new Error('[ERROR] 세자리 숫자가 아닙니다.');
    }
    if (!this.isOneToNine(input)) {
      throw new Error('[ERROR] 1부터 9까지의 숫자가 아닙니다.');
    }
    if (!this.isNotDuplicateNumber(input)) {
      throw new Error('[ERROR] 중복된 자리수가 있습니다.');
    }
    return true;
  },
  isOneOrTwo(input) {
    const pattern = /^[12]$/;
    if (!pattern.test(input)) {
      throw new Error('[ERROR] 1 또는 2가 아닙니다.');
    }
    return true;
  },
};

export default Validate;
