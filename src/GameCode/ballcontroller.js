import { MissionUtils } from "@woowacourse/mission-utils";
import { getResultMessage, ERROR_MESSAGE } from "../Text/message";

//ball judge
export const ballManager = (player, computer) => {
  let [ball, strike] = [0, 0];

  for (let i = 0; i < player.length; i++) {
    if (computer.includes(player[i])) {
      player[i] === computer[i] ? (strike += 1) : (ball += 1);
    }
  }
  //결과 메세지
  return getResultMessage(ball, strike);
};

//error management
export const errorOccurred = (playerNum) => {
  //입력이 숫자인지 판별
  if (isNaN(Number(playerNum))) {
    throw new Error(ERROR_MESSAGE.numberError);
  }
  //입력 범위 판별
  if (!/^[1-9]{3}$/.test(playerNum)) {
    throw new Error(ERROR_MESSAGE.rangeError);
  }
  //중복 되는지 판별
  if (
    playerNum[0] === playerNum[1] ||
    playerNum[1] === playerNum[2] ||
    playerNum[0] === playerNum[2]
  ) {
    throw new Error(ERROR_MESSAGE.dupError);
  }

  return;
};

//computer random ball
export const getComputerBall = () => {
  const COMPUTER_NUM_ARRAY = [];
  while (COMPUTER_NUM_ARRAY.length < 3) {
    const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER_NUM_ARRAY.includes(NUM)) {
      COMPUTER_NUM_ARRAY.push(NUM);
    }
  }

  return COMPUTER_NUM_ARRAY.join("");
};
