import { Console } from '@woowacourse/mission-utils';

async function userInput() {
  const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
  return changeNumArr(userInput);
}

function changeNumArr(number) {
  return number.split('').map(Number);
}

function userInputValidation(nums) {
  const inputStr = nums.join('');
  const regex = /^[1-9]{3}$/;
  return regex.test(inputStr);
}

export { userInput, changeNumArr, userInputValidation };
