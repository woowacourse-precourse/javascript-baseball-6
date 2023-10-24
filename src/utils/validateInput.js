import { PROMPT } from '../constants/constants';

// 사용자 입력값 검증
export default validateInput = (user, len) => {
  const numberRangeRegex = /[^1-9]/g;
  if (len !== 3 || len !== user.replace(numberRangeRegex, '').length)
    throw new Error(PROMPT.error);
};
