import { ANSWER_MESSAGE, NOTHING_MESSAGE } from '../../constants';

const getStrike = (computerNumbers, userNumbers) => {
  return computerNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userNumbers[index]) {
      return acc + 1;
    } else return acc;
  }, 0);
};

const getBall = (computerNumbers, userNumbers) => {
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
    return ANSWER_MESSAGE;
  }
  if (!strike && !ball) {
    return NOTHING_MESSAGE;
  }
  if (!strike && ball) {
    return `${ball}볼`;
  }
  if (strike && !ball) {
    return `${strike}스트라이크`;
  }
  if (strike && ball) {
    return `${ball}볼 ${strike}스트라이크`;
  }
};

const getResult = (computerNumbers, userNumbers) => {
  const ball = getBall(computerNumbers, userNumbers);
  const strike = getStrike(computerNumbers, userNumbers);
  return printResult(ball, strike);
};

export default getResult;
