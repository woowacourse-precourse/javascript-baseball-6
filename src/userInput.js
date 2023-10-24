import { Console } from '@woowacourse/mission-utils';
import { TEXT, REG_EXP } from './constants/constants';

async function userInput() {
  const userInput = await Console.readLineAsync(TEXT.INITIAL);
  return changeNumArr(userInput);
}

function changeNumArr(number) {
  return number.split('').map(Number);
}

function userInputValidation(nums) {
  const inputStr = nums.join('');
  const regex = REG_EXP.INPUT_VALIDATION;
  return regex.test(inputStr);
}

export { userInput, changeNumArr, userInputValidation };
