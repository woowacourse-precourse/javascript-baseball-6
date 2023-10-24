import { MissionUtils } from "@woowacourse/mission-utils";
import { getResultMessage } from "../Text/message";

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
