export default function Validation() {
  this.InputValueLengthValidation = (value) => {
    if (value.length !== 3) {
      throw new Error("3자리 숫자로 입력해주세요.");
    }
  };

  this.InputValueDuplicatedValidation = (value) => {
    const set = new Set(value);
    if (set.size !== 3) {
      throw new Error("중복된 숫자가 입력되었습니다.");
    }
  };

  this.InputValueTypeOfValidation = (value) => {
    if (isNaN(value)) {
      throw new Error("정수로 입력해주세요.");
    }
  };

  this.InputRestartValueValidation = (value) => {
    if (value !== "1" || value !== "2" || !isNaN(value)) {
      throw new Error("'1' 또는 '2'를 입력해주세요.");
    }
  };
}
