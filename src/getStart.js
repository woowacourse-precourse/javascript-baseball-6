import {MissionUtils} from "@woowacourse/mission-utils"
import checkStart from "./checkStart.js"

async function getStart() {
  const restartStr = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  return checkStart(restartStr);
}

export default getStart;