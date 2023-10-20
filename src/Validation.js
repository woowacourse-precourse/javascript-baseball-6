const Validation = {
  validateType(value) {
    if (isNaN(value) || value.includes(".")) {
      throw new Error("[ERROR] 정수를 입력해 주세요.");
    }
  },

  validateLength(value) {
    if (value.length !== 3) {
      throw new Error("[ERROR] 3자리 숫자를 입력해 주세요.");
    }
  },

  validateUnique(value) {
    if (new Set(value).size !== 3) {
      throw new Error("[ERROR] 중복되지 않는 숫자를 입력해 주세요.");
    }
  },
};

export default Validation;
