import { Console } from "@woowacourse/mission-utils";

const BALLINDEX = 0;
const STRIKEINDEX = 1;
const NOTINGINDEX = 2;

function printEnd(resultCount) {
  Console.print(resultCount[STRIKEINDEX] + "스트라이크");
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

function printResult(resultCount) {
  if (resultCount[BALLINDEX] !== 0) {
    if (resultCount[STRIKEINDEX] !== 0) {
      Console.print(
        resultCount[BALLINDEX] + "볼 " + resultCount[STRIKEINDEX] + "스트라이크"
      );
      return;
    }
    Console.print(resultCount[BALLINDEX] + "볼");
    return;
  }
  if (resultCount[STRIKEINDEX] !== 0) {
    Console.print(resultCount[STRIKEINDEX] + "스트라이크");
    return;
  }
  if (resultCount[NOTINGINDEX] !== 0) {
    Console.print("낫싱");
    return;
  }
}

function resultCheck(resultCount) {
  if (resultCount[STRIKEINDEX] === 3) {
    printEnd(resultCount);
    return false;
  }
  printResult(resultCount);
  return true;
}

export default resultCheck;
