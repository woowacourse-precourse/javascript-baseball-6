import { MissionUtils } from "@woowacourse/mission-utils";
import {
  BALL_MANAGER,
  ERROR_OCCURRED,
  COMPUTER_BALL_MAKER,
} from "./ballcontroller";

//game play
const GAME_PLAY = (playerNum, computerNum) => {
  //3스트라이크
  if (playerNum === computerNum) {
    MissionUtils.Console.print("3스트라이크");
    return gameEndManager();
  }
  //아닐 때, 볼 판정 후 다시 사용자 입력 받기
  const PLAY_TEXT = BALL_MANAGER(playerNum, computerNum);
  MissionUtils.Console.print(PLAY_TEXT);
  gameStart(computerNum);
};

//game end
async function gameEndManager() {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const REPLAY_BUTTON = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (REPLAY_BUTTON.trim() === "1") {
    return INIT(); //다시 시작
  }
  if (REPLAY_BUTTON.trim() === "2") {
    return; //종료
  }
  // 1과 2 입력 아닐 때, throw
  throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
}

//game start
async function gameStart(computerNum) {
  //사용사 숫자 입력 받기
  const PLAYER_NUM = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  //숫자 형식이 안 맞을 때, throw
  if (ERROR_OCCURRED(PLAYER_NUM)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  //게임 진행
  await GAME_PLAY(PLAYER_NUM, computerNum);
}

//game set
export const INIT = async () => {
  try {
    //컴퓨터 랜덤 볼
    const COMPUTER_BALL = COMPUTER_BALL_MAKER();
    //게임 시작
    await gameStart(COMPUTER_BALL);
  } catch (error) {
    //throw 예외 처리
    throw error;
  }
};
