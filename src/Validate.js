const doValidate = (input) => {
  isInputLengthRight(input);
};

// 입력한 숫자의 자릿수가 세 자리 인지 확인하는 함수
const isInputLengthRight = (input) => {
  if (input.length !== 3) throw new Error('[ERROR] 세 자리를 입력하세요.');
};

export default doValidate;
