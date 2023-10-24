const Validation = {
  validateType(value) {
    if (isNaN(value) || value.includes(0) || value.includes(".")) {
      throw new Error("[ERROR] 1 ~ 9사이의 정수를 입력해 주세요.");
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

  isCommand(value) {
    if (isNaN(value) || (value !== "1" && value !== "2")) {
      throw new Error("[ERROR] 1 또는 2를 입력해 주세요.");
    }
  },
};

export default Validation;
