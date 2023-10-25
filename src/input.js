import { Console } from "@woowacourse/mission-utils";

function checkInputValue(input) {
  const arrayValue = Array.from(new Set(input.split('').map((ele) => parseInt(ele))));
  arrayValue.forEach((ele) => {
    if (isNaN(ele) || ele === 0 || arrayValue.length !== 3 || input.length !== 3) {
      // Console.print(arrayValue);
      throw new Error("[ERROR] 정확한 형식의 숫자를 입력하세요");
    }
  })
  // TODO 오류마다 메세지 다르게 출력하기
  return arrayValue;
}

export default async function getUserInput() {
  const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const validInputNumber = checkInputValue(inputNumber);
  if (!validInputNumber)
    return;
  return validInputNumber;
}