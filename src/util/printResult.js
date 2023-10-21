import { Console } from "@woowacourse/mission-utils";

function pirntResult(resultCount, correctCheck) {
  for (var idx = 0; idx < resultCount.length; idx++) {
    if (resultCount[idx] !== 0) {
      switch (idx) {
        case 0:
          if (resultCount[idx + 1] !== 0) {
            Console.print(
              resultCount[idx] + "볼 " + resultCount[idx + 1] + "스트라이크"
            );
          } else if (resultCount[idx + 1] == 0) {
            Console.print(resultCount[idx] + "볼");
          }
          break;

        case 1:
          if (resultCount[idx - 1] == 0) {
            Console.print(resultCount[idx] + "스트라이크");
            if (resultCount[idx] === 3) {
              Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
              correctCheck = false;
            }
          }
          break;

        case 2:
          Console.print("낫싱");
          break;
      }
    }
  }
  return correctCheck;
}

export default pirntResult;
