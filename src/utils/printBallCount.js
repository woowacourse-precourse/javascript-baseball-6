import { Console } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../constants/constants.js';

export default function printBallCount({ ball, strike }) {
  if (ball === 0 && strike === 0) Console.print(BALL_COUNT.NOTHING);
  else if (ball !== 0 && strike === 0) Console.print(`${ball}${BALL_COUNT.BALL}`);
  else if (ball === 0 && strike !== 0) Console.print(`${strike}${BALL_COUNT.STRIKE}`);
  else if (ball !== 0 && strike !== 0) Console.print(`${ball}${BALL_COUNT.BALL} ${strike}${BALL_COUNT.STRIKE}`);
}
