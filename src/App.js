import { MissionUtils } from "@woowacourse/mission-utils";
import generateAnswerArray from "./generateAnswerArray";
import handleInput from "./handleInput";
import getHint from "./getHint";

class App {
  async play() {
    while (true) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      const answer = await generateAnswerArray();

      let input = "";
      while (true) {
        input = await handleInput();
        const hint = getHint(answer, input);
        MissionUtils.Console.print(hint);

        if (hint === "3스트라이크") break;
      }

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const restart = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (restart === "2") break;
      if (restart === "1") continue;
    }
  }
}

export default App;
