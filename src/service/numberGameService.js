import createAnswer from "../util/createAnswer.js";
import parseInputToArray from "../util/parseInputToArray.js";
import compareInputWithAnswer from "../util/compareInputWithAnswer.js";
import returnResultMessage from "../util/returnResultMessage.js";
import handleProgress from "../util/handleProgress.js";
import logErrorMessageAndReturnProgressStatus from "../util/logErrorMessageAndReturnProgressStatus.js";

async function numberGameService() {
  let answerLog = [];
  let progressStatus = "1";
  try {
    while (progressStatus === "1") {
      answerLog = createAnswer([...answerLog]);
      let threeStrike = false;
      let input;
      let ballsAndStrike;
      let message;

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
    const PROGRESS_STATUS = logErrorMessageAndReturnProgressStatus(error);

    progressStatus = PROGRESS_STATUS;
    return;
  }
}

export default numberGameService;
