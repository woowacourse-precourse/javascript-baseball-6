import { Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class GameTerminator {
  async promptNewGameOrExit() {
    let userResponse = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    userResponse = userResponse.trim();
    Validation.validateGameTerminationInput(userResponse);

    if (userResponse === "1") {
      return false;
    }

    if (userResponse === "2") {
      Console.print("게임을 종료합니다.");
      return true;
    }
  }
}

export default GameTerminator;
