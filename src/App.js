import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // 상수는 대문자로 짓고, _로 구분한다.
    this.message = {
      START: "숫자 야구 게임을 시작합니다.",
      INPUT: "숫자를 입력해주세요 : ",
      RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      STRIKE: "스트라이크",
      BALL: "볼",
      NOTHING: "낫싱",
      CONGRAT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    };
  }
  printMsgIs(message) {
    MissionUtils.Console.print(message);
  }

  async play() {}
}

export default App;
