const doValidate = (input) => {
  isInputLengthRight(input);
  isInputNumber(input);
  isInputIncludeZero(input);
};

// 입력한 숫자의 자릿수가 세 자리 인지 확인하는 함수
const isInputLengthRight = (input) => {
  if (input.length !== 3) throw new Error('[ERROR] 세 자리를 입력하세요.');
};

// 입력한 숫자가 모두 숫자인지 확인하는 함수
const isInputNumber = (input) => {
  if (Number.isNaN(input * 1)) {
    throw new Error('[ERROR] 숫자를 입력하세요.');
  }
};

// 입력한 숫자에 0이 포함되는지 확인하는 함수
const isInputIncludeZero = (input) => {
  for (let i = 0; i < input.length; i += 1) {
    checkIsZero(input[i] * 1);
  }
};

const checkIsZero = (number) => {
  if (number === 0) throw new Error('[ERROR] 0을 포함할 수 없습니다.');
};
export default doValidate;
