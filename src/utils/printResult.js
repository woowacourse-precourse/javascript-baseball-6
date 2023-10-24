import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/constants';
import App from '../App';

// 결과 출력
export default printResult = async (ball, strike) => {
  if (strike >= 3) {
    strike = Math.min(strike, 3);
    MissionUtils.Console.print(`${strike}${PROMPT.strike}`);
    MissionUtils.Console.print(PROMPT.endGame);
    const user = await MissionUtils.Console.readLineAsync(PROMPT.restartOrExit);
    if (user === '1') {
      const app = new App();
      app.play();
    } else if (user === '2') return;
    else throw new Error(PROMPT.error);
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print(PROMPT.nothing);
  } else {
    const result = [];
    if (ball > 0) result.push(`${ball}${PROMPT.ball}`);
    if (strike > 0) result.push(`${strike}${PROMPT.strike}`);
    MissionUtils.Console.print(result.join(' '));
  }
};
