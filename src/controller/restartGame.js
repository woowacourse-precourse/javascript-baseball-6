import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import validateRestartInput from "../utils/validateRestartInput.js";
import BaseballGame from "../BaseballGame.js";

const restartGame = async () => {
  let input = await Console.readLineAsync(Messages.RESTART_MESSAGE);
  if (!validateRestartInput(input)) {
    throw new Error(Messages.RESTART_ERROR_MESSAGE);
  }
  // 제대로 입력하였을때 1 -> 게임 재시작 2 -> 게임 종료
  if (input === "1") {
    let game = new BaseballGame();
    game.isGameStarted = true;
    await game.startGame();
  }
  if (input === "2") Console.print(Messages.FINISH_GAME_MESSAGE);
};

export default restartGame;
