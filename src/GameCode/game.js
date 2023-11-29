import { MissionUtils } from '@woowacourse/mission-utils';
import { ballManager, getComputerBall } from './ballController.js';
import { errorOccurred } from './errorController.js';
import { START_MESSAGE, ERROR_MESSAGE, END_MESSAGE, RESTART_CHECK } from '../Text/message.js';

//game play
const gamePlay = (playerNum, computerNum) => {
  //3스트라이크
  if (playerNum === computerNum) {
    MissionUtils.Console.print(END_MESSAGE.perfect);
    MissionUtils.Console.print(END_MESSAGE.ending);
    gameEnd();
    return;
  }
  //아닐 때, 볼 판정 후 다시 사용자 입력 받기
  const PLAY_TEXT = ballManager(playerNum, computerNum);
  MissionUtils.Console.print(PLAY_TEXT);
  gameStart(computerNum);
};

//game end
const gameEnd = async () => {
  const RESTART_BUTTON = await MissionUtils.Console.readLineAsync(END_MESSAGE.restart);

  if (RESTART_BUTTON === RESTART_CHECK.continue) {
    init(); //다시 시작
    return;
  }
  if (RESTART_BUTTON === RESTART_CHECK.stop) {
    return; //종료
  }
  // 1과 2 입력 아닐 때, throw
  throw new Error(ERROR_MESSAGE.oneTwoError);
};

//game start
const gameStart = async (computerNum) => {
  //사용사 숫자 입력 받기
  const PLAYER_NUM = await MissionUtils.Console.readLineAsync(START_MESSAGE.input);

  //숫자 형식이 맞을 때
  if (!errorOccurred(PLAYER_NUM)) {
    //게임 진행
    gamePlay(PLAYER_NUM, computerNum);
  }
};

//game set
export const init = async () => {
  try {
    //컴퓨터 랜덤 볼
    const COMPUTER_BALL = getComputerBall();
    //게임 시작
    await gameStart(COMPUTER_BALL.join(''));
  } catch (error) {
    throw error;
  }
};
