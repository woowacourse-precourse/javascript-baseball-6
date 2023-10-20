import { Console } from "@woowacourse/mission-utils";

export async function userInput() {
  const userInputValue = await Console.readLineAsync("숫자를 입력해주세요: ");
  return stringToNumberArr(userInputValue);
}

function stringToNumberArr(value) {
  return value.split("").map(Number);
}

export function userInputValidation(nums) {
  return (
    userInputLengthCheck(nums) && userInputUniqueCheck(nums) && userInputDuplicationCheck(nums)
  );
}

function userInputLengthCheck(nums) {
  return nums.length === 3;
}

function userInputUniqueCheck(nums) {
  const uniqueNumbers = new Set(nums);
  return uniqueNumbers.size === 3;
}

function userInputDuplicationCheck(nums) {
  for (const num of nums) {
    if (isNaN(num) || num < 1 || num > 9) {
      return false;
    }
  }
  return true;
}
