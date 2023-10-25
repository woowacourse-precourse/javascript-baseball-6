import { MissionUtils } from "@woowacourse/mission-utils";
import AnswerValidator from "../gameUtils/AnswerValidator.js";

class InputProcessor {
  static async answerInput() {
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!AnswerValidator.validateAnswer(input)) throw new Error("[ERROR]");
    return input;
  }

  static async restartInput() {
    const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (input !== "1" && input !== "2") throw new Error("[ERROR]");
    return input;
  }
}

export default InputProcessor;
