import { MissionUtils } from "@woowacourse/mission-utils";

class OutputProcessor {
  constructor() {}

  static output(message) {
    MissionUtils.Console.print(message);
  }
}

export default OutputProcessor;
