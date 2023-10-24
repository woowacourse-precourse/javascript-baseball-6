import { Console } from "@woowacourse/mission-utils";

export const inputController = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

  // 3글자인지 확인
  if (input > 3) {
    throw Error("3글자가 아닙니다.");
  }

  // 숫자인지 확인
  if (isNaN(input)) {
    throw Error("숫자가 아닙니다.");
  }

  return input;
};
