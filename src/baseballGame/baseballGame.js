import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG, ERROR_MSG } from "../Messages";
import { getComputerNum, getUserNum } from "./getValue";

// 3. 컴퓨터와 유저의 숫자 비교
export async function compareNum() {
  const computer_num = getComputerNum();

  let ball = 0;
  let strike = 0;
  while (strike !== 3) {
    let user_num = await getUserNum();
    user_num = user_num.split("").map(Number);
    ball = 0;
    strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computer_num[i] === user_num[i]) strike++;
      else if (user_num.includes(computer_num[i])) ball++;
    }

    getHint(ball, strike);
  }

  MissionUtils.Console.print(GAME_MSG.END);
  await reStartOrNot();
}

// 4. 힌트 출력
function getHint(ball, strike) {
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print(GAME_MSG.NOTHING);
  } else if (ball > 0 && strike === 0) {
    MissionUtils.Console.print(ball + GAME_MSG.BALL);
  } else if (ball === 0 && strike > 0) {
    MissionUtils.Console.print(strike + GAME_MSG.STRIKE);
  } else {
    MissionUtils.Console.print(
      ball + GAME_MSG.BALL + " " + strike + GAME_MSG.STRIKE
    );
  }
}

// 6. 게임 재시작/종료 선택
async function reStartOrNot() {
  let answer = await MissionUtils.Console.readLineAsync(GAME_MSG.RESTART);
  if (answer === "1") {
    await compareNum();
  } else if (answer === "2") {
    endGame();
  } else {
    throw new Error(ERROR_MSG.RESTART_ERROR_NOT_ANS);
  }
}

function endGame() {
  return;
}
