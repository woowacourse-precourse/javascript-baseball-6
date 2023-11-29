import { MissionUtils } from '@woowacourse/mission-utils';
import { getResultMessage, GAME_SET } from '../Text/message.js';

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
  while (COMPUTER_NUM_ARRAY.length < GAME_SET.size) {
    const NUM = MissionUtils.Random.pickNumberInRange(GAME_SET.min, GAME_SET.max);
    if (!COMPUTER_NUM_ARRAY.includes(NUM)) {
      COMPUTER_NUM_ARRAY.push(NUM);
    }
  }

  return COMPUTER_NUM_ARRAY;
};
