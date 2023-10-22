import InputError from "./InputError.js";

const isThreeWord = (input) => {
  return input.length === 3;
};

const isNumber = (input) => {
  return !isNaN(+input);
};

const hasDuplicateWord = (input) => {
  return new Set(input).size !== 3;
};

const hasZero = (input) => {
  return input.includes("0");
};

const isInputValid = (input) => {
  if (!isThreeWord(input))
    throw new InputError("3자리의 숫자를 입력해야합니다.");

  if (!isNumber(input))
    throw new InputError("숫자가 아닌 문자는 입력할 수 없습니다.");
  if (hasDuplicateWord(input))
    throw new InputError("중복되는 문자를 입력할 수 없습니다.");
  if (hasZero(input)) throw new InputError("0을 입력할 수 없습니다.");
};

export default isInputValid;
