const inputValidator = (input) => {
  const regex = new RegExp(/^(?!.*(.).*\1)\d{3}$/);
  if (!regex.test(input)) {
    throw new Error('[ERROR] 서로 다른 3자리의 수를 입력해주세요.');
  }
  return input;
};

const playAgainInputValidator = (input) => {
  if (input !== '1' && input !== '2') {
    throw new Error('[ERROR] 1 또는 2를 입력해주세요.');
  }
  return input;
};

export { inputValidator, playAgainInputValidator };
