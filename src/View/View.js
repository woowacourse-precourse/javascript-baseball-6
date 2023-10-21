import { Console } from "@woowacourse/mission-utils";

class View {
  printGameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}

export default View;
