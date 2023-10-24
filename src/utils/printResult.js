import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/constants.js';
import App from '../App.js';

// 결과 출력
export const printResult = async (ball, strike) => {
  if (strike >= 3) {
    strike = Math.min(strike, 3);
    MissionUtils.Console.print(`${strike}${PROMPT.STRIKE}`);
    MissionUtils.Console.print(PROMPT.END_GAME);
    const user = await MissionUtils.Console.readLineAsync(
      PROMPT.RESTART_OR_EXIT
    );
    if (user === '1') {
      const app = new App();
      app.play();
    } else if (user === '2') return;
    else throw new Error(PROMPT.ERROR);
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print(PROMPT.NOTHING);
  } else {
    const result = [];
    if (ball > 0) result.push(`${ball}${PROMPT.BALL}`);
    if (strike > 0) result.push(`${strike}${PROMPT.STRIKE}`);
    MissionUtils.Console.print(result.join(' '));
  }
};
