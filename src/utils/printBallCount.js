import { Console } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../Constants';

const printBallCount = scoreCount => {
  const { strike, ball } = scoreCount;
  let message = '';

  if (strike === 0 && ball === 0) {
    Console.print(BALL_COUNT.nothing);
    return BALL_COUNT.nothing;
  }

  if (ball !== 0) {
    message += `${ball}${BALL_COUNT.ball}`;
    Console.print(message);
  }

  if (strike !== 0) {
    if (message !== '') {
      message += ' ';
    }
    message += `${strike}${BALL_COUNT.strike}`;
    Console.print(message);
  }

  return message;
};

export default printBallCount;
