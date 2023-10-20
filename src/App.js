import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let isGameEnded = false;

    while (!isGameEnded) {
      const answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

      while (true) {
        const userResponse = await Console.readLineAsync(
          "숫자를 입력해주세요: "
        );
        // TODO 입력값 예외처리 필요

        // TODO 입력 결과에 대한 케이스 연산 필요
        break;
      }

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      // TODO 재시작, 종료에 대한 처리 필요
    }
  }
}

export default App;
