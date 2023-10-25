import { ERROR_MESSAGE } from '../../constants';

const checkRange = (userNumber) => {
  let flag = true;
  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] <= 0 && userNumber[i] > 9) flag = !flag;
  }
  return flag;
};

const checkLength = (userNumber) => {
  if (userNumber.length === 3) return true;
  else return false;
};

const checkUniqueness = (userNumber) => {
  if (userNumber.length === [...new Set(userNumber)].length) return true;
  else return false;
};

// 유효한 입력인지 검사합니다.
const checkValidation = (userNumber) => {
  if (userNumber === 'NaN' || !userNumber) {
    throw new Error(ERROR_MESSAGE);
  }
  if (
    !checkRange(userNumber) ||
    !checkLength(userNumber) ||
    !checkUniqueness(userNumber)
  ) {
    throw new Error(ERROR_MESSAGE);
  }
  return true;
};

export default checkValidation;
