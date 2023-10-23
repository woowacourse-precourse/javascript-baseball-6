import { MissionUtils } from "@woowacourse/mission-utils";

class InputProcessor {
  constructor() {}

  static async answerInput() {
    const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    return input;
  }

  static async restartInput() {
    const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    return input;
  }
}

export default InputProcessor;
