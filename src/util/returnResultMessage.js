import { MissionUtils } from "@woowacourse/mission-utils";
import throwInvalidInputErrorMessage from "./throwInvalidInputErrorMessage.js";

async function returnResultMessage(result) {
  const STRIKE = result.strike;
  const BALL = result.ball;

  try {
    let resultMessage = ``;
    let ballMessage = ``;
    let strikeMessage = ``;

    if (BALL) {
      ballMessage += `${BALL}볼`;
    }

    if (STRIKE) {
      strikeMessage += `${STRIKE}스트라이크`;
    }

    switch (true) {
      case strikeMessage !== `` && ballMessage === ``:
        resultMessage = `${strikeMessage}`;
        break;
      case strikeMessage !== `` && ballMessage !== ``:
        resultMessage = `${ballMessage} ${strikeMessage}`;
        break;
      case strikeMessage === `` && ballMessage !== ``:
        resultMessage = `${ballMessage}`;
        break;
      default:
        resultMessage = `낫싱`;
    }

    if (resultMessage !== ``) {
      return resultMessage;
    } else {
      const ERROR_MESSAGE = `[ERROR] 입력에 대한 결과를 출력할 수 없습니다`;
      throwInvalidInputErrorMessage(ERROR_MESSAGE);
    }
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default returnResultMessage;
