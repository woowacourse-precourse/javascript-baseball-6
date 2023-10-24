export const validation = {
  baseBallNumbersInputOfUser: (userInput) => {
    if (/[^1-9]/g.test(userInput))
      throw new Error('[ERROR] 1-9 사이의 숫자만 입력해주세요');

    if ([...String(userInput)].length !== 3)
      throw new Error('[ERROR] 3자리 숫자만 입력해주세요');

    if (new Set([...String(userInput)]).size !== [...String(userInput)].length)
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요');
  },
  restartNumberInputOfUser: (userInput) => {
    if (![1, 2].includes(userInput)) throw new Error('[ERROR]');
  },
};
