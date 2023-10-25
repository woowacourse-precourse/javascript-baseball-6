export const validateInput = (userInput) => {
  if (isNaN(Number(userInput))) {
    throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
  }
  if (userInput.length !== 3) {
    throw new Error('[ERROR] 3자리의 숫자를 입력해주세요.');
  }
  if (new Set(userInput).size !== 3) {
    throw new Error('[ERROR] 모두 다른 숫자를 입력해주세요.');
  }
  return true;
};

export const validateAskRetry = (input) => {
  if (input !== 1 || input !== 2) {
    throw new Error('[ERROR] 1 혹은 2를 입력해주세요.');
  }
}