import { Console } from "@woowacourse/mission-utils";

export const getNumber = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

  let numbers = [];
  numbers = input.split("").map(Number);

  if (new Set(numbers).size !== 3) {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
  return numbers;
};

export const getContinueGame = async () => {
  const input = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (input === "1" || input === "2") {
    return input;
  } else {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
};
