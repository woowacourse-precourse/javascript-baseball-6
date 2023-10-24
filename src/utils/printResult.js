import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/constants.js';
import App from '../App.js';

// 결과 출력
export const printResult = async (ball, strike) => {
  if (strike >= 3) {
    if (strike > 3) strike = 3;
    MissionUtils.Console.print(`${strike}${PROMPT.STRIKE}`);
    MissionUtils.Console.print(PROMPT.END_GAME);
    let user = await MissionUtils.Console.readLineAsync(PROMPT.RESTART_OR_EXIT);
    if (user === '1') {
      const app = new App();
      app.play();
    } else if (user === '2') return;
    else throw new Error(PROMPT.ERROR);
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print(PROMPT.NOTHING);
  } else if (strike > 0) {
    if (ball > 0) {
      MissionUtils.Console.print(
        `${ball}${PROMPT.BALL} ${strike}${PROMPT.STRIKE}`
      );
    } else {
      MissionUtils.Console.print(`${strike}${PROMPT.STRIKE}`);
    }
  } else {
    MissionUtils.Console.print(`${ball}${PROMPT.BALL}`);
  }
};
