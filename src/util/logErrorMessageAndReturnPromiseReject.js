import { MissionUtils } from "@woowacourse/mission-utils";

function logErrorMessageAndReturnPromiseReject(error) {
  MissionUtils.Console.print(`[ERROR] ${error}`);
  const PROGRESS_STATUS = "2";
  const ERROR_DATA = {
    message: `[ERROR] ${error}`,
    progressStatus: PROGRESS_STATUS,
  };

  const ERROR = new Error(JSON.stringify(ERROR_DATA));

  return Promise.reject(ERROR);
}

export default logErrorMessageAndReturnPromiseReject;
