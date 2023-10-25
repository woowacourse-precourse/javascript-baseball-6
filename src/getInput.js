import { Console } from "@woowacourse/mission-utils";

export const getNumber = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

  let numbers = [];
  numbers = input.split("").map(Number);
};
