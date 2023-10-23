import { Console } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../constants/constants.js';

/**
 * 볼, 스트라이크 값 출력하는 함수
 * @param {{ball:number, strike:number}} 볼, 스트라이크 값
 */
export default function printBallCount({ ball, strike }) {
  if (ball === 0 && strike === 0) Console.print(BALL_COUNT.NOTHING);
  else if (ball !== 0 && strike === 0) Console.print(`${ball}${BALL_COUNT.BALL}`);
  else if (ball === 0 && strike !== 0) Console.print(`${strike}${BALL_COUNT.STRIKE}`);
  else if (ball !== 0 && strike !== 0) Console.print(`${ball}${BALL_COUNT.BALL} ${strike}${BALL_COUNT.STRIKE}`);
}
