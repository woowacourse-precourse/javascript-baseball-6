import { Console } from "@woowacourse/mission-utils";

async function checkInputValue(input) {
  const arrayValue = input.split('').map((ele) => parseInt(ele));
  await Console.print(arrayValue);
  arrayValue.forEach((ele) => {
    if (isNaN(ele) || arrayValue.length > 3)
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  })
  return arrayValue;
}

export default async function getUserInput() {
  const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const validInputNumber = await checkInputValue(inputNumber);
  return validInputNumber;
}