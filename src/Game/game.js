import { MissionUtils } from '@woowacourse/mission-utils';
import { MAKE_RANDOM_NUMBER } from './ball.js';

//game set
export const gameSet = async () => {
  try {
    const RANDOM_BALL = MAKE_RANDOM_NUMBER();
    MissionUtils.Console.print(RANDOM_BALL);
    // await gameStart(COMPUTER_BALL);
  } catch (error) {
    throw error;
  }
};
