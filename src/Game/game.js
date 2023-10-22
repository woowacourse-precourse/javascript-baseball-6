import { MissionUtils } from '@woowacourse/mission-utils';
import { MakeRandomNumber, isValidUserNumber } from './ball.js';

//game start
async function getUserInputNumber(computerNum) {
  const USER_INPUT_NUMBER = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  if (!isValidUserNumber(USER_INPUT_NUMBER)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  // await GAME_PLAY(USER_INPUT_NUMBER, computerNum);
  MissionUtils.Console.print(stringToNumberArray(USER_INPUT_NUMBER));
}

//game set
export const GameSet = async () => {
  try {
    const RANDOM_BALL = MakeRandomNumber();
    MissionUtils.Console.print(RANDOM_BALL);
    await getUserInputNumber(RANDOM_BALL);
  } catch (error) {
    throw error;
  }
};

const stringToNumberArray = (string) => {
  return [...string].map((char) => Number(char));
};
