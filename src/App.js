import { MissionUtils } from "@woowacourse/mission-utils";
import generateAnswerArray from "./generateAnswerArray";
import getUserInput from "./getUserInput";
import checkIsValidInput from "./checkIsValidInput";
import getHint from "./getHint";

class App {
  async play() {
    while (true) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      const answer = await generateAnswerArray();

      let userInput = await getUserInput();
      const isValidInput = checkIsValidInput(userInput);
      if (!isValidInput) {
        throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      while (answer !== userInput) {
        MissionUtils.Console.print(getHint(answer, userInput));

        userInput = await getUserInput();
        const isValidInput = checkIsValidInput(userInput);
        if (!isValidInput) {
          throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }

      MissionUtils.Console.print(getHint(answer, userInput));
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
