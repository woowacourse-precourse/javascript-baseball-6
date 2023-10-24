import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";

MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

const game = new Game();

async function startGame() {
  await game.play();
  const regame = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (regame == 1) {
    startGame();
  }
}

startGame();
