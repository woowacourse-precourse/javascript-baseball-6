import { Console } from "@woowacourse/mission-utils";

export const compareNumbers = async (computerNum, inputNum) => {
  if (computerNum.toString() === inputNum.toString()) {
    Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const AGAIN_NUM = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (AGAIN_NUM === "1" || AGAIN_NUM === "2") {
      return AGAIN_NUM;
    } else {
      throw Error("[ERROR]");
    }
  }

  let strike = 0;
  [0, 1, 2].forEach((index) => {
    if (computerNum[index] === inputNum[index]) strike += 1;
  });

  let ball = 0;
  [0, 1, 2].forEach((index) => {
    if (computerNum.includes(inputNum[index])) ball += 1;
  });

  ball -= strike;

  if (ball === 0 && strike === 0) {
    return Console.print("낫싱");
  }

  Console.print(`${ball}볼 ${strike}스트라이크`);
};
