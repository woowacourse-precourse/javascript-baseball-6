import { Console } from "@woowacourse/mission-utils";

export const getNumber = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

  let numbers = [];
  numbers = input.split("").map(Number);
  return numbers;
};

export const getContinueGame = async () => {
  let input;
  while (1) {
    input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (input === "1" || input === "2") {
      break;
    } else {
      Console.print("잘못된 입력입니다.");
    }
  }
  return input;
};
