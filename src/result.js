import { Console } from '@woowacourse/mission-utils';

import { RESULT } from './constants/constants';

function checkResult(computerNumber, userNumber) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < computerNumber.length; i++) {
    if (computerNumber[i] === userNumber[i]) {
      strike++;
    } else if (computerNumber.includes(userNumber[i])) {
      ball++;
    }
  }
  printResult(ball, strike);
  return strike === 3;
}

function printResult(ball, strike) {
  let result = '';
  if ((ball & strike) === 0) result = RESULT.NOTHING;
  if (ball > 0) result += ball + RESULT.BALL;
  if (strike > 0) result += strike + RESULT.STRIKE;
  Console.print(result);
}

export { checkResult };
