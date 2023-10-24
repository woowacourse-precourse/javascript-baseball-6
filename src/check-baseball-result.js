import { MissionUtils } from "@woowacourse/mission-utils";

function checkBaseballResult(BALLS, STRIKES, gameSettings) {
  if (STRIKES == gameSettings.ballLength) {
    MissionUtils.Console.print(`${STRIKES}${gameSettings.strikeMessage}`)
    MissionUtils.Console.print(`${gameSettings.gameClear}`)
    return true;
  } else if (BALLS && STRIKES) {
    MissionUtils.Console.print(
      `${BALLS}${gameSettings.ballMessage} ${STRIKES}${gameSettings.strikeMessage}`
    );
  } else if (BALLS) {
    MissionUtils.Console.print(`${BALLS}${gameSettings.ballMessage}`);
  } else if (STRIKES) {
    MissionUtils.Console.print(`${STRIKES}${gameSettings.strikeMessage}`);
  } else {
    MissionUtils.Console.print(`${gameSettings.noStrikeNoBallMsg}`);
  }
  return false;
}

export default checkBaseballResult
