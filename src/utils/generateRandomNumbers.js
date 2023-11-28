import { MissionUtils } from '@woowacourse/mission-utils';

const generateRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number)) randomNumbers.push(number);
  }
  return randomNumbers;
};

export default generateRandomNumbers;
