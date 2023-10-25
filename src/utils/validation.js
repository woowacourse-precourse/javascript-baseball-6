export const validation = {
  baseBallNumbersInputOfUser: (userInput) => {
    if (userInput.trim().length !== 3) {
      throw new Error('[ERROR] 입력에 공백이 있으면 안됩니다 !');
    }
    if ([...userInput].length !== 3) {
      throw new Error('[ERROR] 3자리 숫자만 입력해주세요');
    }
    if (/[^1-9]/g.test(userInput.trim())) {
      throw new Error('[ERROR] 1-9 사이의 숫자만 입력해주세요');
    }
    if (new Set([...userInput]).size < [...userInput].length) {
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요');
    }
  },
  restartNumberInputOfUser: (userInput) => {
    if (userInput.length !== 1) {
      throw new Error('[ERROR] 1또는 2 한자리의 숫자만 입력해주세요');
    }
    if (!['1', '2'].includes(userInput))
      throw new Error('[ERROR] 1 또는 2만 입력해주세요');
  },
};
