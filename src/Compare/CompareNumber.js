import { MissionUtils } from '@woowacourse/mission-utils';
import CountBall from './CountBall';
import CountStrike from './CountStrike';

const CompareNumber = (computerNumber, userInput) => {
  const BALL_COUNT = CountBall(computerNumber, userInput);
  const STRIKE_COUNT = CountStrike(computerNumber, userInput);

  if (STRIKE_COUNT === 3) {
    MissionUtils.Console.print(`${STRIKE_COUNT}스트라이크`);
    return true;
  }

  if (BALL_COUNT === 0 && STRIKE_COUNT === 0) {
    MissionUtils.Console.print('낫싱');
    return false;
  }

  if (BALL_COUNT > 0 && STRIKE_COUNT === 0) {
    MissionUtils.Console.print(`${BALL_COUNT}볼`);
    return false;
  }

  if (BALL_COUNT === 0 && STRIKE_COUNT > 0) {
    MissionUtils.Console.print(`${STRIKE_COUNT}스트라이크`);
    return false;
  }

  if (BALL_COUNT > 0 && STRIKE_COUNT > 0) {
    MissionUtils.Console.print(`${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`);
    return false;
  }
};

export default CompareNumber;
