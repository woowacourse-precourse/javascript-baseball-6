import { MissionUtils } from "@woowacourse/mission-utils";

//game start
async function gameStart(computerNum) {
  try {
    const PLAYER_NUM = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (ERROR_OCCURRED(PLAYER_NUM, computerNum)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    GAME_PLAY(PLAYER_NUM, computerNum);
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

//game play
const GAME_PLAY = (playerNum, computerNum) => {
  //3개 맞힘
  if (playerNum === computerNum) {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameEndManager();
  } else {
    //나머지
    const PLAY_TEXT = BALL_MANAGER(playerNum, computerNum);
    MissionUtils.Console.print(PLAY_TEXT);
    gameStart(computerNum);
  }
};

const BALL_MANAGER = (player, computer) => {
  let [ball, strike] = [0, 0];
  for (let i = 0; i < player.length; i++) {
    if (computer.includes(player[i])) {
      player[i] === computer[i] ? (strike += 1) : (ball += 1);
    }
  }
  const TEXT_ARRAY = [];
  if (ball > 0) {
    TEXT_ARRAY.push(`${ball}볼`);
  }
  if (strike > 0) {
    TEXT_ARRAY.push(`${strike}스트라이크`);
  }

  return TEXT_ARRAY.length > 0 ? TEXT_ARRAY.join(" ") : "낫싱";
};

//error management
const ERROR_OCCURRED = (playerNum, computerNum) => {
  if (isNaN(Number(playerNum))) {
    return true;
  }
  if (computerNum.length !== playerNum.length) {
    return true;
  }
  if (
    playerNum[0] === playerNum[1] ||
    playerNum[1] === playerNum[2] ||
    playerNum[0] === playerNum[2]
  ) {
    return true;
  }

  return false;
};
//game end
async function gameEndManager() {
  try {
    const REPLAY_BUTTON = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (REPLAY_BUTTON === "1") {
      return INIT();
    }
    if (REPLAY_BUTTON === "2") {
      return MissionUtils.Console.close();
    }
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

//game set
const INIT = () => {
  //computer number
  const COMPUTER_NUM_ARRAY = [];
  while (COMPUTER_NUM_ARRAY.length < 3) {
    const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER_NUM_ARRAY.includes(NUM)) {
      COMPUTER_NUM_ARRAY.push(NUM);
    }
  }

  gameStart(COMPUTER_NUM_ARRAY.join(""));
};

module.exports = INIT;
