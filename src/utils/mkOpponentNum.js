import { Random } from '@woowacourse/mission-utils';

function mkOpponentNum() {
  let opponentNum = '';
  while (opponentNum.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!opponentNum.includes(number)) opponentNum += number;
  }

  return opponentNum;
}

export { mkOpponentNum };
