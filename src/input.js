import { Console } from "@woowacourse/mission-utils";

async function checkInputValue(input) {
  const arrayValue = input.split('').map((ele) => parseInt(ele));
  arrayValue.forEach((ele) => {
    if (isNaN(ele) || arrayValue.length > 3)
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  })
  // TODO 서로 다른 세 자리의 수 체크하기
  // TODO 오류마다 메세지 다르게 출력하기
  return arrayValue;
}

export default async function getUserInput() {
  const inputNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const validInputNumber = await checkInputValue(inputNumber);
  return validInputNumber;
}