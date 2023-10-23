import { MissionUtils } from "@woowacourse/mission-utils";

function handleError(error) {
  MissionUtils.Console.print("[ERROR]");
  MissionUtils.Console.print(error);
}

export default handleError;
