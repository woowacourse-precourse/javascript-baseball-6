import { MissionUtils } from '@woowacourse/mission-utils';
import { RESULT_MESSAGE } from '../../constants';

const getStrike = (computerNumbers, userNumbers) => {
  userNumbers = userNumbers.split('').map(Number);
  return computerNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userNumbers[index]) {
      return acc + 1;
    } else return acc;
  }, 0);
};

const getBall = (computerNumbers, userNumbers) => {
  userNumbers = userNumbers.split('').map(Number);
  return computerNumbers.reduce((acc, currentValue, index) => {
    if (
      currentValue !== userNumbers[index] &&
      computerNumbers.includes(userNumbers[index])
    ) {
      return acc + 1;
    } else return acc;
  }, 0);
};

const printResult = (ball, strike) => {
  if (strike === 3) {
    MissionUtils.Console.print(RESULT_MESSAGE.ANSWER);
    return true;
  }
  if (!strike && !ball) {
    MissionUtils.Console.print(RESULT_MESSAGE.NOTHING);
  }
  if (!strike && ball) {
    MissionUtils.Console.print(`${ball}볼`);
  }
  if (strike && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  }
  if (strike && ball) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  return false;
};

const getResult = (computerNumbers, userNumbers) => {
  const ball = getBall(computerNumbers, userNumbers);
  const strike = getStrike(computerNumbers, userNumbers);
  return printResult(ball, strike);
};

export default getResult;
