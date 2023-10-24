import { ANSWER_LENGTH } from "../Constants";

const validateInput = (input) => {
  if (input.length !== ANSWER_LENGTH) {
    throw new Error("[ERROR] 입력 값의 길이는 3이어야 합니다.");
  }
  if (Number.isNaN(Number(input))) {
    throw new Error("[ERROR] 입력 값은 숫자여야 합니다.");
  }

  if (new Set(input).size !== ANSWER_LENGTH) {
    throw new Error("[ERROR] 입력 값은 중복되는 숫자가 없어야 합니다.");
  }

  if (input.includes("0")) {
    throw new Error("[ERROR] 입력 값은 1~9의 숫자여야 합니다.");
  }

  return true;
};

export default validateInput;
