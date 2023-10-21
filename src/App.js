import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
  constructor() {}

  // 게임 진행 함수
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();
