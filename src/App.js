import { MissionUtils } from "@woowacourse/mission-utils";
import { calculateCounts, isThreeStrike, printScore } from "./baseball-game.js";
import { getThreeDistinctNumbers, stringToNumberArray } from "./utils/array.js";
import { validateNumberInput } from "./utils/input.js";

class App {
  RESTART_GAME = "1";
  END_GAME = "2";

  async play() {
    while (true) {
      const computerNumbers = getThreeDistinctNumbers();

      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      while (true) {
        const numberInput = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        validateNumberInput(numberInput);

        const { strikeCount, ballCount } = calculateCounts(
          computerNumbers,
          stringToNumberArray(numberInput)
        );

        printScore(strikeCount, ballCount);

        if (!isThreeStrike(strikeCount)) continue;

        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        const continueInput = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );

        if (continueInput === this.RESTART_GAME) break;
        if (continueInput === this.END_GAME) return;
      }
    }
  }
}

export default App;
