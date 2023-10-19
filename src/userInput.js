import { Console } from "@woowacourse/mission-utils";

export default async function userInput() {
  const userInputValue = await Console.readLineAsync("숫자를 입력해주세요: ");
  const validatedInput = userInputValidation(userInputValue);
  return stringToNumberArr(validatedInput);
}

function stringToNumberArr(value) {
  return value.split("").map(Number);
}

function userInputValidation(nums) {
  userInputLengthCheck(nums);
  userInputUniqueCheck(nums);
  userInputDuplicationCheck(nums);
  return nums;
}

function userInputLengthCheck(nums) {
  if (nums.length !== 3) throw new Error("길이는 반드시 3글자여야 합니다");
}

function userInputUniqueCheck(nums) {
  const uniqueNumbers = new Set(nums);
  if (uniqueNumbers.size !== 3) throw new Error("중복된 숫자가 있습니다.");
}

function userInputDuplicationCheck(nums) {
  for (const num of nums) {
    if (isNaN(num) || num < 1 || num > 9) {
      throw new Error("숫자는 1에서 9 사이여야 합니다.");
    }
  }
}
