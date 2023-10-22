import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME } from './constant.js';

export default function printResult({ strike, ball }) {
  MissionUtils.Console.print(GAME.RESULT(strike, ball));
}
