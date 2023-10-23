import { MissionUtils } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임을 시작합니다."

class BaseBallGame {
  async play() {
    MissionUtils.Console.print(START_MESSAGE);
  }
}

export default BaseBallGame