import { MissionUtils } from "@woowacourse/mission-utils";

function checkBaseballResult(BALLS, STRIKES, GameValues) {
  if (STRIKES == GameValues.ballSize) {
    return true;
  } else if (BALLS && STRIKES) {
    MissionUtils.Console.print(
      `${BALLS}${GameValues.ballMessage} ${STRIKES}${GameValues.strikeMessage}`
    );
  } else if (BALLS) {
    MissionUtils.Console.print(`${BALLS}${GameValues.ballMessage}`);
  } else if (STRIKES) {
    MissionUtils.Console.print(`${STRIKES}${GameValues.strikeMessage}`);
  } else {
    MissionUtils.Console.print(`${GameValues.noStrikeNoBallMsg}`);
  }
  return false;
}

export default checkBaseballResult
