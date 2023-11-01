import { Random } from '@woowacourse/mission-utils';
import { SETTING } from '../constant/CONSTANT.js';

export default function mkOpponentNum() {
  let opponentNum = '';
  while (opponentNum.length < SETTING.numLen) {
    const number = Random.pickNumberInRange(SETTING.startNum, SETTING.endNum);
    if (!opponentNum.includes(number)) opponentNum += number;
  }

  return opponentNum;
}
