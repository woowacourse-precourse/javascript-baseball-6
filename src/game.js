import { MissionUtils } from "@woowacourse/mission-utils";

export const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
}

export const countScore = (computerNumber, userNumber) => {
  const result = {
    ball: 0,
    strike: 0,
  };
  const userNumberArray = userNumber.split('');
  userNumberArray.forEach((num, index) => {
    if (num === computerNumber[index]) {
      result.strike += 1;
    }
    else if (computerNumber.includes(num)) {
      result.ball += 1;
    }
  });
  return result;
}

export const printScore = (ball, strike) => {
  const textArray = [];

  if (ball > 0) {
    textArray.push(`${ball}볼`);
  }
  if (strike > 0) {
    textArray.push(`${strike}스트라이크`);
  }
  if (textArray.length === 0)
    return '낫싱';
  return textArray.join(' ');
}
