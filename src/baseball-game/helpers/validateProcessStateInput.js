import InputError from "../../errors/InputError.js";

const validateProcessStateInput = (input) => {
  if (!isOneOrTwo(input)) {
    throw new InputError("[ERROR] 1이나 2가 아닌 값을 입력하셨습니다.");
  }
};

const isOneOrTwo = (str) => {
  return /^[1-2]{1}$/.test(str);
};

export default validateProcessStateInput;
