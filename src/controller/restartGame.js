import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";

const restartGame = async () => {
  let input = await Console.readLineAsync(Messages.RESTART_MESSAGE);

  // 제대로 입력하였을때 1 -> 게임 재시작 2 -> 게임 종료
};

export default restartGame;
