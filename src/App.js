import { MissionUtils } from "@woowacourse/mission-utils";
import generateAnswerArray from "./generateAnswerArray";
import getUserInput from "./getUserInput";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = await generateAnswerArray();
    // console.log("[answer]", answer);

    const userInput = await getUserInput();
    // console.log("[userInput]", userInput);
  }
}

export default App;
