import { Console } from "@woowacourse/mission-utils";

export const inputController = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

  // 3글자인지 확인
  if (input.length !== 3) {
    throw Error("[ERROR]");
  }

  // 숫자인지 확인
  if (isNaN(input)) {
    throw Error("[ERROR]");
  }

  const INPUT_ARR = input.split("").map((el) => parseInt(el, 10));
  const CHECK_ARR = new Set(INPUT_ARR);

  // 서로 다른 숫자인지 확인
  if ([...CHECK_ARR].length !== 3) {
    throw Error("[ERROR]");
  }

  return INPUT_ARR;
};
