import createAnswer from "../util/createAnswer.js";
import parseInputToArray from "../util/parseInputToArray.js";
import compareInputWithAnswer from "../util/compareInputWithAnswer.js";
import returnResultMessage from "../util/returnResultMessage.js";
import handleProgress from "../util/handleProgress.js";
import logErrorMessageAndReturnPromiseReject from "../util/logErrorMessageAndReturnPromiseReject.js";
import { MissionUtils } from "@woowacourse/mission-utils";

async function numberGameService() {
  let answerLog = [];
  let progressStatus = "1";
  let input;
  try {
    while (progressStatus === "1") {
      answerLog = createAnswer();
      let threeStrike = false;
      let ballsAndStrike;
      let message;
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      while (!threeStrike) {
        input = await parseInputToArray();
        ballsAndStrike =
          input && (await compareInputWithAnswer(answerLog, input));
        threeStrike =
          ballsAndStrike !== undefined &&
          ballsAndStrike.strike === 3 &&
          ballsAndStrike.ball === 0;
        message = ballsAndStrike && (await returnResultMessage(ballsAndStrike));
        progressStatus = message && (await handleProgress(message));
      }
    }
  } catch (error) {
    const ERROR = await logErrorMessageAndReturnPromiseReject(error);

    const PROGRESS_STATUS = ERROR.progressStatus;
    progressStatus = PROGRESS_STATUS;
  }
}

export default numberGameService;
