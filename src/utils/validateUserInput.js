// 입력받은 값이 3자리이며 숫자로 이루어져 있고 중복된 숫자가 있는지 검증해준다.
class ValidateUserInput {
  constructor(input) {
    this.input = input;
  }

  validateUserInput() {
    if (/^[1-9]{3}$/.test(this.input)) {
      const numberInput = this.input.split("").map(Number);
      const uniqueInput = new Set(numberInput);

      return uniqueInput.size === 3;
    }
    return false;
  }
}

export default ValidateUserInput;
