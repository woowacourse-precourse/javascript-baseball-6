import { MissionUtils } from "@woowacourse/mission-utils";

//ball judge
export const BALL_MANAGER = (player, computer) => {
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
export const ERROR_OCCURRED = (playerNum) => {
  //입력이 숫자인지 판별
  if (isNaN(Number(playerNum))) {
    return true;
  }
  //1-9 범위인지 판별
  if (!/^[1-9]{3}$/.test(playerNum)) {
    return true;
  }
  //중복 되는지 판별
  if (
    playerNum[0] === playerNum[1] ||
    playerNum[1] === playerNum[2] ||
    playerNum[0] === playerNum[2]
  ) {
    return true;
  }

  return false;
};

//computer random ball
export const COMPUTER_BALL_MAKER = () => {
  const COMPUTER_NUM_ARRAY = [];
  while (COMPUTER_NUM_ARRAY.length < 3) {
    const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER_NUM_ARRAY.includes(NUM)) {
      COMPUTER_NUM_ARRAY.push(NUM);
    }
  }
  return COMPUTER_NUM_ARRAY.join("");
};
