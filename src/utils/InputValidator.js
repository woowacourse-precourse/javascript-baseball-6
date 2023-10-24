const InputValidator = {
  validateUserInputNumber(input) {
    const inputNumbers = input.split("");
    if (input.length !== 3)
      throw new Error("[ERROR] 입력값은 3자리로 구성되어야 합니다.");
    if (inputNumbers.includes("0"))
      throw new Error("[ERROR] 입력값에 0은 포함될 수 없습니다.");
    if (input.replace(/[1-9]/g, "").length > 0)
      throw new Error("[ERROR] 입력값은 숫자로 구성되어야 합니다.");
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error("[ERROR] 입력값은 모두 다른 숫자로 구성되어야 합니다.");
  },

  validateRestartInputNumber(input) {
    if (input.length !== 1)
      throw new Error("[ERROR] 입력값은 1 또는 2, 둘 중 하나여야 합니다.");
    if (input.replace(/1|2/g, "").length > 0)
      throw new Error("[ERROR] 입력값은 1 또는 2로 이루어진 숫자여야 합니다.");
  },
};

export default InputValidator;
