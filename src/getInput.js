import { Console } from "@woowacourse/mission-utils";

export const getNumber = async () => {
  const INPUT = await Console.readLineAsync("숫자를 입력해주세요 : ");

  let numbers = [];
  numbers = INPUT.split("").map(Number);

  if (new Set(numbers).size !== 3) {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
  return numbers;
};

export const getContinueGame = async () => {
  const INPUT = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (INPUT === "1" || INPUT === "2") {
    return INPUT;
  } else {
    throw new Error("[ERROR] 잘못된 입력입니다.");
  }
};
