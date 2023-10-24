import { PROMPT } from '../constants/constants.js';

// 사용자 입력값 검증
export const validateInput = (user, LEN) => {
  const numberRangeRegex = /[^1-9]/g;
  if (
    LEN !== 3 ||
    user !== user.replace(numberRangeRegex, '') ||
    LEN !== [...new Set(user)].join('').length
  )
    throw new Error(PROMPT.ERROR);
};
