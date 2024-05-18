import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_NUMBERS_MESSAGE = "숫자를 입력해주세요 : ";
const REPLAY_QUESTION_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

class User {
  static async inputExpectedNumbers() {
    const text = await MissionUtils.Console.readLineAsync(INPUT_NUMBERS_MESSAGE);

    return text;
  }

  static async inputReplay() {
    const text = await MissionUtils.Console.readLineAsync(REPLAY_QUESTION_MESSAGE);

    return text;
  }
}

export default User;