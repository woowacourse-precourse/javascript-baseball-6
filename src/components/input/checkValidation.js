import { GAME_MESSAGE } from '../../constants';

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

const checkValidation = (userNumber) => {
  if (userNumber === 'NaN' || !userNumber) {
    throw new Error(GAME_MESSAGE.INPUT_ERROR);
  }
  if (
    !checkRange(userNumber) ||
    !checkLength(userNumber) ||
    !checkUniqueness(userNumber)
  ) {
    throw new Error(GAME_MESSAGE.INPUT_ERROR);
  }
  return true;
};

export default checkValidation;
