import { MissionUtils } from '@woowacourse/mission-utils';
import { MAKE_RANDOM_NUMBER } from './ball.js';

//game start
async function getUserInputNumber(computerNum) {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  MissionUtils.Console.print(USER_INPUT_NUMBER);
}

//game set
export const GAME_SET = async () => {
  try {
    const RANDOM_BALL = MAKE_RANDOM_NUMBER();
    MissionUtils.Console.print(RANDOM_BALL);
    await getUserInputNumber(RANDOM_BALL);
  } catch (error) {
    throw error;
  }
};
