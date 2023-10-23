import { MissionUtils } from "@woowacourse/mission-utils";

function logErrorMessageAndReturnProgressStatus(error) {
  MissionUtils.Console.print("[ERROR]");
  MissionUtils.Console.print(error);
  const PROGRESS_STATUS = "2";
  return PROGRESS_STATUS;
}

export default logErrorMessageAndReturnProgressStatus;
