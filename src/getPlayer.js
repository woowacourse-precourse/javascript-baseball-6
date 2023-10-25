import {MissionUtils} from "@woowacourse/mission-utils"
import checkPlayer from "./checkPlayer.js";

async function getPlayer() {
  
  const playerStr = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
  const player = Array.from(playerStr).map(Number);
  checkPlayer(player);
  return player;
}

export default getPlayer;