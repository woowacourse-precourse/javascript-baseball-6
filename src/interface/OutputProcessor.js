import { MissionUtils } from "@woowacourse/mission-utils";

class OutputProcessor {
  constructor() {}

  static output(message) {
    MissionUtils.Console.print(message);
  }

  static resultOutput({ ball, strike, nothing }) {
    let message = "";
    if (ball) {
      message += ball + "볼 ";
    }
    if (strike) {
      message += strike + "스트라이크 ";
    }
    if (nothing === 3) {
      message += "낫싱";
    }
    MissionUtils.Console.print(message);
  }
}

export default OutputProcessor;
