import { Console } from '@woowacourse/mission-utils';

import { TEXT, REG_EXP } from './constants/constants';

function changeNumArr(number) {
  return number.split('').map(Number);
}

async function userInput() {
  const userInputData = await Console.readLineAsync(TEXT.INITIAL);
  return changeNumArr(userInputData);
}

function userInputValidation(nums) {
  const inputStr = nums.join('');
  const regex = REG_EXP.INPUT_VALIDATION;
  return regex.test(inputStr);
}

export { userInput, changeNumArr, userInputValidation };
