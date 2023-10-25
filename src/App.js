import { MissionUtils } from "@woowacourse/mission-utils";
import generateAnswerArray from "./generateAnswerArray";
import getUserInput from "./getUserInput";
import checkIsValidInput from "./checkIsValidInput";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = await generateAnswerArray();
    // console.log("[answer]", answer);

    const userInput = await getUserInput();
    // console.log("[userInput]", userInput);

    const isValidInput = checkIsValidInput(userInput);
    // console.log("[isValidInput]", isValidInput);

    if (!isValidInput) throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

export default App;
