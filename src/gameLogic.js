import { Console } from "@woowacourse/mission-utils";
import { printMessage, printErrorMessage } from "./utils/messages.js";

export const countBaseballCounts = (comNum, userNum) =>
  userNum.reduce(
    (acc, item, idx) => {
      if (comNum.includes(item)) {
        if (comNum[idx] === item) acc.strike += 1;
        else acc.ball += 1;
      }
      return acc;
    },
    { strike: 0, ball: 0 }
  );

export const askToContinue = async () => {
  printMessage("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  const userInput = await Console.readLineAsync();

  switch (userInput) {
    case "1":
      return true;
    case "2":
      return false;
    default:
      printErrorMessage("[ERROR] 1 또는 2를 입력해주세요.");
  }
};
